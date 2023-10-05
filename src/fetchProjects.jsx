import { createClient } from "contentful";
import React, { useEffect, useState } from "react";

const client = createClient({
  space: "3uhwlm57dso0",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "projects",
      });
      console.log(response);
      const projects = response.items.map((item) => {
        const { title, demo, description, image, skills, source } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, demo, description, skills, source, id, img };
      });

      setProjects(projects);

      // const projects=
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { projects };
};
