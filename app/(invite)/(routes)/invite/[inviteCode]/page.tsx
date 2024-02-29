import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface InviteCodePageProps {
	params: {
		inviteCode: string;
	};
}

const InviteCodePage = async ({ params }: InviteCodePageProps) => {
	const profile = await currentProfile();

	if (!profile) {
		return redirectToSignIn();
	}

	if (!params.inviteCode) {
		return redirect("/");
	}

	const existingServer = await db.server.findFirst({
		where: {
			// Si matcheamos el invite code del servidor al que intentamos unirnos Y si ya somos un miembro de ese servidor
			inviteCode: params.inviteCode,
			members: {
				some: {
					profileId: profile.id,
				},
			},
		},
	});

	// En ese caso, redireccionamos el usuario al servidor (no hace falta que lo una)
	if (existingServer) {
		return redirect(`/servers/${existingServer.id}`);
	}

	// Si no, actualizamos el server agregando el nuevo miembro
	const server = await db.server.update({
		where: {
			inviteCode: params.inviteCode,
		},
		data: {
			members: {
				create: [
					{
						profileId: profile.id,
					},
				],
			},
		},
	});

	// Y lo redireccionamos
	if (server) {
		return redirect(`/servers/${server.id}`);
	}

	return null;
};

export default InviteCodePage;
