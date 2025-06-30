import {
  Calendar,
  ChevronDown,
  ChevronUp,
  Home,
  Inbox,
  Search,
  Settings,
  Aperture,
  ArrowDownFromLine,
  User2,
  ChevronsUpDown,
  HelpCircle,
  FileText,
  MessageSquare,
} from "lucide-react";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  DropdownMenuContent,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Tooltip } from "../ui/tooltip";
import { TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";

const sideBarHeader = {
  currentWorkSpace: "ACME Inc",
  workpaceLogo: Aperture,
  options: [
    {
      workspaceName: "ACME Org",
      workspaceLogo: ArrowDownFromLine,
    },
    {
      workspaceName: "Evil Org",
      workspaceLogo: Inbox,
    },
  ],
};

// Menu items with proper URLs
const items = [
  {
    title: "Dashboard",
    icon: Home,
    isCollapsible: true,
    subItems: [
      {
        title: "Overview",
        url: "/dashboard",
        icon: Home,
      },
      {
        title: "Analytics",
        url: "/dashboard/analytics",
        icon: Aperture,
      },
      {
        title: "Settings",
        url: "/dashboard/settings",
        icon: Settings,
      },
    ],
  },
  {
    title: "Inbox",
    url: "/inbox",
    icon: Inbox,
    isCollapsible: false,
  },
  {
    title: "Calendar",
    url: "/calendar",
    icon: Calendar,
    isCollapsible: false,
  },
  {
    title: "Search",
    url: "/search",
    icon: Search,
    isCollapsible: false,
  },
];

// Help section items
const helpItems = [
  {
    title: "Documentation",
    url: "/help/docs",
    icon: FileText,
  },
  {
    title: "Support",
    url: "/help/support",
    icon: MessageSquare,
  },
  {
    title: "FAQ",
    url: "/help/faq",
    icon: HelpCircle,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  // Helper function to check if a path is active
  const isPathActive = (path: string | undefined) => {
    return pathname === path;
  };

  // Helper function to check if a collapsible section should be open

  return (
    <Sidebar
      collapsible="icon"
      variant="floating"
      className="bg-background border-r"
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="h-12 hover:bg-accent/50 flex items-center gap-3 px-3 flex-shrink-0">
                  <sideBarHeader.workpaceLogo />

                  <div className="flex flex-col items-start flex-shrink-0">
                    <span className="text-sm font-semibold">
                      {sideBarHeader.currentWorkSpace}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Workspace
                    </span>
                  </div>

                  <ChevronsUpDown className="ml-auto h-4 w-4 flex-shrink-0" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="right" className="w-64">
                {sideBarHeader.options.map((workspace) => (
                  <DropdownMenuItem
                    key={workspace.workspaceName}
                    className="gap-2"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded bg-muted">
                      <workspace.workspaceLogo className="h-3 w-3" />
                    </div>
                    <span>{workspace.workspaceName}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) =>
                item.isCollapsible ? (
                  <Collapsible
                    key={item.title}
                    defaultOpen
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className="flex items-center gap-2 w-full">
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                          <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                    </SidebarMenuItem>
                    <CollapsibleContent>
                      {item.subItems &&
                        item.subItems.map((subItem) => (
                          <SidebarMenuItem key={subItem.title}>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <SidebarMenuButton
                                  asChild
                                  isActive={isPathActive(subItem.url)}
                                  className="pl-8"
                                >
                                  <a
                                    href={subItem.url}
                                    className="flex items-center gap-2"
                                  >
                                    <subItem.icon className="h-4 w-4" />
                                    <span>{subItem.title}</span>
                                  </a>
                                </SidebarMenuButton>
                              </TooltipTrigger>
                              <TooltipContent
                                side="right"
                                className="bg-popover text-popover-foreground px-3 py-2 rounded-md shadow-lg text-sm font-medium border"
                              >
                                {subItem.title}
                              </TooltipContent>
                            </Tooltip>
                          </SidebarMenuItem>
                        ))}
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={item.title}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SidebarMenuButton
                          asChild
                          isActive={isPathActive(item.url)}
                        >
                          <a
                            href={item.url}
                            className="flex items-center gap-2"
                          >
                            <item.icon className="h-4 w-4" />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </TooltipTrigger>
                      <TooltipContent
                        side="right"
                        className="bg-popover text-popover-foreground px-3 py-2 rounded-md shadow-lg text-sm font-medium border"
                      >
                        {item.title}
                      </TooltipContent>
                    </Tooltip>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <Collapsible defaultOpen={true} className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="hover:bg-accent/50 rounded transition-colors">
                Help & Support
                <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {helpItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <SidebarMenuButton
                            asChild
                            isActive={isPathActive(item.url)}
                          >
                            <a
                              href={item.url}
                              className="flex items-center gap-2"
                            >
                              <item.icon className="h-4 w-4" />
                              <span>{item.title}</span>
                            </a>
                          </SidebarMenuButton>
                        </TooltipTrigger>
                        <TooltipContent
                          side="right"
                          className="bg-popover text-popover-foreground px-3 py-2 rounded-md shadow-lg text-sm font-medium border"
                        >
                          {item.title}
                        </TooltipContent>
                      </Tooltip>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="h-10 hover:bg-accent/50">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted">
                    <User2 className="h-3 w-3" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-medium">Username</span>
                    <span className="text-xs text-muted-foreground">
                      user@example.com
                    </span>
                  </div>
                  <ChevronUp className="ml-auto h-4 w-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="right"
                align="end"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
