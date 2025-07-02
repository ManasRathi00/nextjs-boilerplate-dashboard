import {
  ChevronDown,
  ChevronUp,
  Home,
  Inbox,
  Aperture,
  ArrowDownFromLine,
  User2,
  ChevronsUpDown,
  Settings,
  FileText,
  UserLock,
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
    url: "/dashboard",
    icon: Home,
    isCollapsible: false,
  },
  {
    title: "Tasks",
    url: "/dashboard/tasks",
    icon: Inbox,
    isCollapsible: false,
  },
  {
    title: "Settings",
    url: "/",
    icon: Settings,
    isCollapsible: false,
  },
  {
    title: "Reports",
    url: "/",
    icon: FileText,
    isCollapsible: false,
  },
];

/** Auth section items */
const authGroup = {
  title: "Auth",
  items: [
    {
      title: "Sign up",
      url: "/signup",
      icon: User2,
    },
    {
      title: "Login",
      url: "/login",
      icon: UserLock,
    },
  ],
};

export function AppSidebar() {
  const pathname = usePathname();

  // Helper function to check if a path is active
  const isPathActive = (path: string | undefined) => {
    if (!path) return false;
    return pathname === path;
  };

  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                    <sideBarHeader.workpaceLogo className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">
                      {sideBarHeader.currentWorkSpace}
                    </span>
                  </div>
                  <ChevronsUpDown className="ml-auto" />
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
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <SidebarMenuButton
                        asChild
                        isActive={isPathActive(item.url)}
                      >
                        <a href={item.url} className="flex items-center gap-2">
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
        </SidebarGroup>

        {/* Collapsible group for Auth - now default open with better styling */}
        <Collapsible defaultOpen={true} className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="hover:bg-accent/50 rounded transition-colors flex items-center w-full">
                {authGroup.title}
                <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {authGroup.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <SidebarMenuButton
                            className="pl-4"
                            asChild
                            isActive={isPathActive(item.url)} // Added indentation for subitems
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
                <SidebarMenuButton className="h-10">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted">
                    <User2 className="h-3 w-3" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-medium">Username</span>
                    <span className="text-xs">user@example.com</span>
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
