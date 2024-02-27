import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import { db } from "@/utils/supabase/client";

export const initialProfile = async () => {
	const user = await currentUser();

	if (!user) {
		return redirectToSignIn();
	}

	const { data } = await db.from("profile").select("*").eq("userid", user.id);

	if (data.length > 0) {
		return data;
	}

	const newProfile = await db.from("profile").insert({
		userid: user.id,
		name: `${user.firstName} ${user.lastName}`,
		imageurl: user.imageUrl,
		email: user.emailAddresses[0].emailAddress,
	});

	return newProfile;
};
