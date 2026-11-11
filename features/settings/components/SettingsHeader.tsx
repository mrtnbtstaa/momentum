"use client";
import { HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ReusableTabs from '@/components/reusable/Tabs/ReusableTabs';
import { SETTINGS_TABS } from '../types/settings-generic.t';

interface SettingsHeaderProps {
  activeTab: string;
  onTabChange: (tab: any) => void;
}

const SettingsHeader = ({ activeTab, onTabChange }: SettingsHeaderProps) => {
  return (
    <div className="flex flex-col gap-6 pb-6 border-b border-white/5">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Settings</h1>
          <p className="text-xs text-[#888888]">
            Manage organization settings, member access, security, and preferences.
          </p>
        </div>
        <Button variant="ghost" size="icon" className="text-[#888888] hover:text-white h-9 w-9 rounded-full bg-white/5 cursor-pointer">
          <HelpCircle className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <ReusableTabs defaultValue="Workspace" options={SETTINGS_TABS.options} value={activeTab} onValueChange={onTabChange}  />
      </div>
    </div>
  );
};

export default SettingsHeader;