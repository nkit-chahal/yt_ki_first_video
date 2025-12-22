import React, { forwardRef } from 'react';
import { CheckCircle2, AlertTriangle, XCircle, Info } from 'lucide-react';

const StatusMessage = forwardRef(({ type = "success", text }, ref) => {
    const config = {
        success: { color: "bg-green-100 text-green-700 border-green-200", icon: CheckCircle2 },
        warning: { color: "bg-amber-100 text-amber-700 border-amber-200", icon: AlertTriangle },
        error: { color: "bg-red-100 text-red-700 border-red-200", icon: XCircle },
        info: { color: "bg-blue-100 text-blue-700 border-blue-200", icon: Info },
    };
    const { color, icon: Icon } = config[type] || config.success;

    return (
        <div
            ref={ref}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border shadow-md opacity-0 scale-90 ${color}`}
        >
            <Icon size={18} />
            <span className="font-bold">{text}</span>
        </div>
    );
});

export default StatusMessage;
