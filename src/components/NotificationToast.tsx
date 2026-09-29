import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X } from 'lucide-react';

export const NotificationToast: React.FC = () => {
  const { toasts, removeToast } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        maxWidth: '420px',
        width: 'calc(100vw - 48px)',
        pointerEvents: 'none',
      }}
    >
      {toasts.map((toast) => {
        let bg = '#ffffff';
        let border = '#cbd5e1';
        let icon = <Info size={20} color="#2563eb" />;
        let titleColor = '#0f172a';

        if (toast.type === 'success') {
          border = '#a7f3d0';
          icon = <CheckCircle2 size={20} color="#10b981" />;
        } else if (toast.type === 'error') {
          border = '#fecaca';
          icon = <AlertCircle size={20} color="#ef4444" />;
        } else if (toast.type === 'warning') {
          border = '#fde68a';
          icon = <AlertTriangle size={20} color="#f59e0b" />;
        }

        return (
          <div
            key={toast.id}
            style={{
              pointerEvents: 'auto',
              backgroundColor: bg,
              borderRadius: '12px',
              padding: '12px 16px',
              border: `1.5px solid ${border}`,
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.15)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div style={{ flexShrink: 0 }}>{icon}</div>
            <div style={{ flex: 1, fontSize: '0.9rem', color: titleColor, fontWeight: 500 }}>
              {toast.message}
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              style={{
                color: '#94a3b8',
                padding: '4px',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <X size={16} />
            </button>
          </div>
        );
      })}
    </div>
  );
};
