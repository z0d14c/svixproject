import { useContext, useEffect, useState } from "react";
import { ApplicationOut } from "svix";
import { AppContext } from "./context";

// you can have this default to a given app
// or create an app for for you every time
export function useAppPortalUrl(defaultAppId?: string) {
  const [appPortalUrl, setAppPortalUrl] = useState<string>();
  const [svixApp, setSvixApp] = useState<ApplicationOut>();
  const { svix } = useContext(AppContext);

  useEffect(() => {
    const createSvixApp = async () => {
      try {
        const app = await svix.application.create({
          name: "Our Demo App " + Math.random().toString(36).substring(7),
        });

        setSvixApp(app);
      } catch (err) {
        console.error("Error creating Svix application:", err);
      }
    };

    const getApp = async () => {
      try {
        if (!defaultAppId) return;
        const app = await svix.application.get(defaultAppId);
        setSvixApp(app);
      } catch (err) {
        console.error("Error getting Svix application:", err);
      }
    };

    if (!defaultAppId) {
      createSvixApp();
    } else {
      getApp();
    }
  }, []);

  useEffect(() => {
    const fetchAppPortalUrl = async () => {
      if (!svixApp) return;

      try {
        const appPortal = await svix.authentication.appPortalAccess(
          svixApp.id,
          {}
        );
        setAppPortalUrl(appPortal.url);
      } catch (err) {
        console.error("Error fetching app portal URL:", err);
      }
    };

    fetchAppPortalUrl();
  }, [svixApp]);

  return { appPortalUrl, svixApp };
}

export default useAppPortalUrl;
