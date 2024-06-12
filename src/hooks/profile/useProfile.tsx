import API from "@api/api";
import URLs from "@api/urls";
import { ProfileData } from "@models/profile";
import { useCallback, useEffect, useState } from "react";

export default function useProfile() {
  const [data, setData] = useState<ProfileData>();

  const fetchProfile = useCallback(async () => {
    const res: ProfileData = await API.get(URLs.profile.fetchProfile);
    setData(res);
  }, []);

  useEffect(() => {
    fetchProfile();
  }, []);

  return { data };
}
