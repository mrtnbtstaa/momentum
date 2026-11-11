"use client";
import { Button } from '@/components/ui/button';

interface DangerZoneSettingsProps {
  onExportData: () => void;
  onDeleteWorkspace: () => void;
}

const DangerZoneSettings = ({
  onExportData,
  onDeleteWorkspace,
}: DangerZoneSettingsProps) => {
  return (
    <div className="flex flex-col gap-8 max-w-3xl">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold text-rose-400 tracking-tight">Danger Zone</h2>
        <p className="text-xs text-[#888888]">Destructive actions that cannot be undone. Exercise caution.</p>
      </div>

      <div className="flex flex-col gap-4 text-xs">
        {/* Transfer ownership */}
        <div className="flex items-center justify-between bg-[#141414] border border-white/10 p-4 rounded-xl">
          <div className="flex flex-col gap-0.5 max-w-md">
            <span className="text-white font-medium">Transfer ownership</span>
            <span className="text-[#888888] text-[11px]">Reassign primary workspace owner permissions to another admin.</span>
          </div>
          <Button variant="outline" className="bg-[#1C1C1C] hover:bg-white/10 border-white/10 text-white text-xs h-9 px-4 rounded-xl cursor-pointer">
            Transfer ownership
          </Button>
        </div>

        {/* Export workspace data */}
        <div className="flex items-center justify-between bg-[#141414] border border-white/10 p-4 rounded-xl">
          <div className="flex flex-col gap-0.5 max-w-md">
            <span className="text-white font-medium">Export workspace data</span>
            <span className="text-[#888888] text-[11px]">Export all projects, tasks, comments, and audit logs as JSON.</span>
          </div>
          <Button onClick={onExportData} variant="outline" className="bg-[#1C1C1C] hover:bg-white/10 border-white/10 text-white text-xs h-9 px-4 rounded-xl cursor-pointer">
            Export JSON
          </Button>
        </div>

        {/* Delete workspace */}
        <div className="flex items-center justify-between bg-rose-950/20 border border-rose-900/40 p-4 rounded-xl">
          <div className="flex flex-col gap-0.5 max-w-md">
            <span className="text-rose-400 font-medium">Delete this workspace</span>
            <span className="text-rose-300/70 text-[11px]">Permanently erase this organization and all associated data.</span>
          </div>
          <Button onClick={onDeleteWorkspace} className="bg-rose-600 hover:bg-rose-700 text-white font-medium text-xs h-9 px-4 rounded-xl cursor-pointer shadow-sm">
            Delete workspace
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DangerZoneSettings