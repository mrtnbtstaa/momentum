"use client";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Copy, Upload } from 'lucide-react';
import ReusableLabel from '@/components/reusable/Label/Label';
import ReusableInput from '@/components/reusable/Input/Input';
import ReusableTextArea from '@/components/reusable/TextArea/TextArea';

interface WorkspaceSettingsProps {
  workspaceName: string;
  setWorkspaceName: (val: string) => void;
  description: string;
  setDescription: (val: string) => void;
  workspaceUrl: string;
  logo: string;
  onCopyUrl: () => void;
}

const WorkspaceSettings = ({
  workspaceName,
  setWorkspaceName,
  description,
  setDescription,
  workspaceUrl,
  logo,
  onCopyUrl,
}: WorkspaceSettingsProps) => {
  return (
    <div className="flex flex-col gap-8 max-w-3xl">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold text-white tracking-tight">Workspace</h2>
        <p className="text-xs text-[#888888]">Shared organization profile, branding, and workspace URL.</p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Logo */}
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4">
          <ReusableLabel label="Workspace logo" />
          <div className="sm:col-span-2 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-600 to-indigo-800 border border-white/10 flex items-center justify-center text-white font-bold text-lg shadow-md">
              {logo}
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost">
                <Upload className="w-3.5 h-3.5 mr-2 text-[#888888]" /> Upload logo
              </Button>
              <Button variant="destructive">
                Remove
              </Button>
            </div>
          </div>
        </div>

        {/* Name */}
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4">
          <ReusableLabel label="Workspace name" />
          <div className="sm:col-span-2">
            <ReusableInput
              value={workspaceName}
              onChange={(e) => setWorkspaceName(e.target.value)}
            />
          </div>
        </div>

        {/* Description */}
        <div className="grid grid-cols-1 sm:grid-cols-3 items-start gap-4">
          <ReusableLabel label="Description" />
          <div className="sm:col-span-2 flex flex-col gap-1.5">
            <ReusableTextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={300}
            rows={3}
            />
            <span className="text-[11px] text-[#888888] text-right font-mono">{description.length} / 280</span>
          </div>
        </div>

        {/* URL */}
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4">
          <ReusableLabel label="Workspace URL" />
          <div className="sm:col-span-2 flex items-center gap-2">
            <ReusableInput
            value={workspaceUrl}
            />
            <Button
              variant="outline"
              onClick={onCopyUrl}
              className="bg-[#141414] hover:bg-white/10 border-white/10 text-xs text-white h-10 px-4 rounded-xl cursor-pointer flex items-center gap-1.5 shrink-0"
            >
              <Copy className="w-3.5 h-3.5 text-[#888888]" /> Copy
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WorkspaceSettings;