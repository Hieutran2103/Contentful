import { createClient } from "contentful";
import { useEffect, useState } from "react";

// hook của contenful bắt buộc phải có để lấy
// Để lấy được id và accepToken thì phải setting của project rồi chọn API KEY
const client = createClient({
  space: "idtojtgtzrhy", // id_Space của project
  accessToken: import.meta.env.VITE_API_KEY, //id_acceptoken của project
  // environment: "master",
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      //lAY DATA từ contenful
      const response = await client.getEntries({ content_type: "project" }); // tên của project

      const project = response.items.map((item) => {
        const { img, title, url } = item.fields;
        const id = item.sys.id;
        const image = img?.fields?.file?.url;
        return { title, image, id, url };
      });
      setProjects(project);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
