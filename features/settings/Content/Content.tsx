"use client";
import SettingsHeader from '../components/SettingsHeader';
import WorkspaceSettings from '../components/WorkspaceSettings';
import SecuritySettings from '../components/SecuritySettings';
import DangerZoneSettings from '../components/DangerZoneSettings';
import { useSettings } from '../hooks/useSettings';

const Content = () => {
  const {
    activeTab,
    setActiveTab,
    workspaceName,
    setWorkspaceName,
    description,
    setDescription,
    workspaceUrl,
    logo,
    passwordPolicy,
    setPasswordPolicy,
    require2fa,
    setRequire2fa,
    ssoConnected,
    sessionTimeout,
    setSessionTimeout,
    sessions,
    handleCopyUrl,
    handleRevokeSession,
    handleExportData,
    handleDeleteWorkspace,
  } = useSettings();

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white p-6 sm:p-8 flex flex-col gap-8 font-sans">
      
      {/* Header & Tab Bar */}
      <SettingsHeader activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Conditional Tab Rendering */}
      <div className="pb-12">
        {activeTab.toLowerCase() === 'workspace' && (
          <WorkspaceSettings
            workspaceName={workspaceName}
            setWorkspaceName={setWorkspaceName}
            description={description}
            setDescription={setDescription}
            workspaceUrl={workspaceUrl}
            logo={logo}
            onCopyUrl={handleCopyUrl}
          />
        )}
        {activeTab.toLowerCase() === 'security' && (
          <SecuritySettings
            passwordPolicy={passwordPolicy}
            setPasswordPolicy={setPasswordPolicy}
            require2fa={require2fa}
            setRequire2fa={setRequire2fa}
            ssoConnected={ssoConnected}
            sessionTimeout={sessionTimeout}
            setSessionTimeout={setSessionTimeout}
            sessions={sessions}
            onRevokeSession={handleRevokeSession}
          />
        )}

        {activeTab.toLowerCase() === 'danger zone' && (
          <DangerZoneSettings
            onExportData={handleExportData}
            onDeleteWorkspace={handleDeleteWorkspace}
          />
        )}
      </div>

    </div>
  );
};

export default Content;