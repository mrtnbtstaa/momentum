"use client";
import { useState } from 'react';
import { ActiveSession } from '../types/settings.t';

export const useSettings = () => {
  const [activeTab, setActiveTab] = useState<'Workspace' | 'Security' | 'Danger Zone'>('Workspace');

  // Workspace State
  const [workspaceName, setWorkspaceName] = useState('Acme Product Corp');
  const [description, setDescription] = useState('Core engineering, product design, and infrastructure management workspace for Atlas platform systems.');
  const [workspaceUrl, setWorkspaceUrl] = useState('momentum.app/acme-corp');
  const [logo, setLogo] = useState('M');

  // Security State
  const [passwordPolicy, setPasswordPolicy] = useState<string>("Strong (12+ chars, mixed case, numbers, symbols)");
  const [require2fa, setRequire2fa] = useState(true);
  const [ssoConnected, setSsoConnected] = useState(true);
  const [sessionTimeout, setSessionTimeout] = useState('After 8 hours of inactivity');
  const [sessions, setSessions] = useState<ActiveSession[]>([
    {
      id: 'sess-1',
      device: 'MacBook Pro 16"',
      browser: 'Chrome 122',
      location: 'San Francisco, US',
      ip: '192.168.1.104',
      current: true,
      lastActive: 'Current',
    },
    {
      id: 'sess-2',
      device: 'iPhone 15 Pro',
      browser: 'Safari',
      location: 'San Francisco, US',
      ip: '192.168.1.118',
      current: false,
      lastActive: '3h ago',
    }
  ]);

  // Handlers
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(workspaceUrl);
  };

  const handleRevokeSession = (id: string) => {
    setSessions(prev => prev.filter(s => s.id !== id));
  };

  const handleExportData = () => {
    alert("Exporting workspace data as JSON...");
  };

  const handleDeleteWorkspace = () => {
    confirm("Are you sure you want to permanently delete this workspace?");
  };

  return {
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
    setSsoConnected,
    sessionTimeout,
    setSessionTimeout,
    sessions,
    handleCopyUrl,
    handleRevokeSession,
    handleExportData,
    handleDeleteWorkspace,
  };
};