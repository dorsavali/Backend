import { useCallback, useState } from "react";
import OemMenu from "../components/oem/Menu";
import OemOverview from "../sections/oem/Overview";

export default function OemPage() {
  const [organizationName, setOrganizationName] = useState("OEM Portal");
  const handleOrganizationLoaded = useCallback((name: string) => {
    setOrganizationName(name || "OEM Portal");
  }, []);

  const logout = () => {
    localStorage.removeItem("ua_access");
    localStorage.removeItem("ua_refresh");
    window.location.href = "/login";
  };

  return (
    <OemMenu organizationName={organizationName} onLogout={logout}>
      <OemOverview onOrganizationLoaded={handleOrganizationLoaded} />
    </OemMenu>
  );
}
