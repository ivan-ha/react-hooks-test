import { useEffect, useState } from "react";
import axios from "axios";

export const useRandomUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios(
          "https://randomuser.me/api/?results=10&inc=name,login&nat=us"
        );
        setUsers(response.data.results);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return users;
};
