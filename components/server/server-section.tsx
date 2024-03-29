"use client";

import { ServerWithMembersWithProfiles } from "@/types";
import { ChannelType, MemberRole } from "@prisma/client";
import { ActionTooltip } from "@/components/action-tooltip";
import { ChevronDown, Plus, Settings } from "lucide-react";
import { useModal } from "@/hooks/use-modal-store";

interface ServerSectionProps {
	label: string;
	role?: MemberRole;
	sectionType: "channels" | "members";
	channelType?: ChannelType;
	server?: ServerWithMembersWithProfiles;
}

export const ServerSection = ({
	label,
	role,
	sectionType,
	channelType,
	server,
}: ServerSectionProps) => {
	const { onOpen } = useModal();
	return (
		<div className="flex items-center justify-between py-2">
			<p className="cursor-pointer flex flex-row items-center text-xs uppercase font-semibold text-zinc-500 dark:text-zinc-400">
				{label}
			</p>
			{role !== MemberRole.GUEST && sectionType === "channels" && (
				<ActionTooltip label="Create channel" side="top">
					<button
						onClick={() => onOpen("createChannel")}
						className="text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-znic-300 transition">
						<Plus className="h-4 w-4" />
					</button>
				</ActionTooltip>
			)}

			{role === MemberRole.ADMIN && sectionType === "members" && (
				<ActionTooltip label="Create channel" side="top">
					<button
						onClick={() => onOpen("members", { server })}
						className="text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-znic-300 transition">
						<Settings className="h-4 w-4" />
					</button>
				</ActionTooltip>
			)}
		</div>
	);
};
