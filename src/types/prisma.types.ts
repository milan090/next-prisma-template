export type LogLevel = "info" | "query" | "warn" | "error";
export type LogDefinition = {
  level: LogLevel;
  emit: "stdout" | "event";
};
