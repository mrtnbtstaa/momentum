"use client";
import { Switch } from '@/components/ui/switch';
import { Monitor, Smartphone } from 'lucide-react';
import { ActiveSession } from '../types/settings.t';
import ReusableSelect from '@/components/reusable/Select/Select';
import { PASSWORD_POLICY, SESSION_TIMEOUT } from '../types/settings-generic.t';
import ReusableLabel from '@/components/reusable/Label/Label';

interface SecuritySettingsProps {
    passwordPolicy: string;
    setPasswordPolicy: (v: string) => void;
    require2fa: boolean;
    setRequire2fa: (v: boolean) => void;
    ssoConnected: boolean;
    sessionTimeout: string;
    setSessionTimeout: (v: string) => void;
    sessions: ActiveSession[];
    onRevokeSession: (id: string) => void;
}

const SecuritySettings = ({
    passwordPolicy,
    setPasswordPolicy,
    require2fa,
    setRequire2fa,
    ssoConnected,
    sessionTimeout,
    setSessionTimeout,
    sessions,
    onRevokeSession,
}: SecuritySettingsProps) => {
    return (
        <div className="flex flex-col gap-8 max-w-3xl">
            <div className="flex flex-col gap-1">
                <h2 className="text-xl font-bold text-white tracking-tight">Security</h2>
                <p className="text-xs text-[#888888]">Authentication standards, session lifespans, and active devices.</p>
            </div>

            <div className="flex flex-col gap-6 text-xs">
                {/* Password policy */}
                <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4">
                    <ReusableLabel label="Password policy" />
                    <div className="sm:col-span-2 flex flex-col gap-1">
                        <ReusableSelect
                        className="w-full"
                        options={PASSWORD_POLICY}
                        value={passwordPolicy}
                        onValueChange={setPasswordPolicy}
                        aria-label="Password policy"
                        />
                        <span className="text-[11px] text-[#888888]">Applies to all new passwords and password resets.</span>
                    </div>
                </div>

                {/* Require 2FA */}
                <div className="grid grid-cols-1 sm:grid-cols-3 items-start gap-4">
                    <ReusableLabel label="Require 2FA" />
                    <div className="sm:col-span-2 flex flex-col gap-1.5">
                        <div className="flex items-center gap-3">
                            <Switch checked={require2fa} onCheckedChange={setRequire2fa} />
                            <span className="text-zinc-200 font-medium">Enforce multi-factor verification</span>
                        </div>
                        <span className="text-[11px] text-[#888888]">All members must enable 2FA on their next login session.</span>
                    </div>
                </div>

                {/* Single sign-on */}
                {/* <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4">
                    <ReusableLabel label="Single sign-on" />
                    <div className="sm:col-span-2 flex items-center justify-between bg-[#141414] border border-white/10 px-4 py-2.5 rounded-xl">
                        <span className="text-zinc-200">Connected to Okta Enterprise SAML 2.0</span>
                        <button className="text-sky-400 hover:text-sky-300 font-medium cursor-pointer">Configure SSO</button>
                    </div>
                </div> */}

                {/* Session timeout */}
                <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4">
                    <ReusableLabel label="Session timeout" />
                    <div className="sm:col-span-2">
                        <ReusableSelect
                        className="w-full"
                        options={SESSION_TIMEOUT}
                        value={sessionTimeout}
                        onValueChange={setSessionTimeout}
                        aria-label="Session timeout"
                        />
                    </div>
                </div>

                {/* Active sessions */}
                <div className="grid grid-cols-1 sm:grid-cols-3 items-start gap-4 pt-2 border-t border-white/5">
                    <ReusableLabel label="Active sessions" />
                    <div className="sm:col-span-2 flex flex-col gap-3">
                        {sessions.map((session) => (
                            <div key={session.id} className="flex items-center justify-between bg-[#141414] border border-white/10 p-3.5 rounded-xl">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400">
                                        {session.device.includes('iPhone') ? <Smartphone className="w-4 h-4" /> : <Monitor className="w-4 h-4" />}
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2">
                                            <span className="text-white font-medium">{session.device} · {session.browser}</span>
                                            {session.current && <span className="text-[10px] bg-sky-500/20 text-sky-400 px-1.5 py-0.2 rounded font-mono">Current</span>}
                                        </div>
                                        <span className="text-[11px] text-[#888888]">{session.location} · {session.ip} {session.lastActive !== 'Current' && `· ${session.lastActive}`}</span>
                                    </div>
                                </div>

                                {!session.current && (
                                    <button
                                        onClick={() => onRevokeSession(session.id)}
                                        className="text-xs text-rose-400 hover:text-rose-300 font-medium cursor-pointer"
                                    >
                                        Revoke
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecuritySettings;