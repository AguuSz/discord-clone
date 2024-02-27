import { InitialModal } from "@/components/modals/initial-modal";
import { initialProfile } from "@/lib/initial-profile";
import { db } from "@/utils/supabase/client";
import { redirect } from "next/navigation";

const SetupPage = async () => {
	const { data: user } = await initialProfile();

	const { data: server } = await db
		.from("server")
		.select("*")
		.eq("members.profileId", user?.id)
		.single();

	if (server) {
		return redirect(`/server/${server.id}`);
	}

	return <InitialModal />;
};

export default SetupPage;
