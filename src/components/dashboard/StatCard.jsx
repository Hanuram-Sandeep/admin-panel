import React from "react";
import { cn } from "../../lib/utils";

const StatCard = ({
  title,
  value,
  icon: Icon,
  change,
  changeType = "increase",
  iconColor = "blue",
}) => {
  const iconClasses = {
    blue: "stat-icon-blue",
    green: "stat-icon-green",
    orange: "stat-icon-orange",
    red: "stat-icon-red",
  };

  return (
    <div className="glass-card p-6 animate-fade-in">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold tracking-tight">{value}</p>
          {change && (
            <p
              className={cn(
                "text-sm font-medium",
                changeType === "increase" ? "text-success" : "text-destructive"
              )}
            >
              {changeType === "increase" ? "+" : "-"}
              {change}%
              <span className="text-muted-foreground ml-1">
                from last month
              </span>
            </p>
          )}
        </div>
        <div className={cn("p-3 rounded-xl", iconClasses[iconColor])}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
