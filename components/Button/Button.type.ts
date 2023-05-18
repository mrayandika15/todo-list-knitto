import React from "react";

export type IButton = {
  variant: "outline" | "colored" | "unstyled" | "danger";
  children: React.ReactNode;
  onClick?: (event?: any) => void;
  isLoading?: boolean;
};
