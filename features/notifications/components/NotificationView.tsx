"use client";
import React, { useState, useMemo } from 'react';
import { NotificationItem } from '../types/notifications.t';
import { mockNotifications } from '../data/mock-notifications';
import NotificationHeader from './NotificationHeader';
import NotificationTabs from './NotificationTabs';
import Wrapper from '@/components/reusable/Wrapper/Wrapper';
import NotificationTable from './NotificationTable';

export const NotificationView: React.FC = () => {

  const [activeTab, setActiveTab] = useState('All');
  const [notifications, setNotifications] = useState<NotificationItem[]>(mockNotifications);
  const unreadCount = useMemo(() => notifications.filter(n => n.unread).length, [notifications]);

  const handleMarkAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  return (
    <Wrapper>
      {/* Header */}
      <NotificationHeader
        unreadCount={unreadCount}
        totalCount={notifications.length}
        onMarkAllAsRead={handleMarkAllAsRead}
      />
      {/* Tabs / Filters */}
      <NotificationTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      {/* Reusable Data Table Container */}
      <NotificationTable activeTab={activeTab} notifications={notifications} setNotifications={setNotifications} />
    </Wrapper>
  );
};

export default NotificationView;