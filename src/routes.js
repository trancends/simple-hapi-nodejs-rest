import { addNotesHandler } from "./handler.js";

const routes = [
  {
    method: "GET",
    path: "/notes",
    handler: addNotesHandler,
  },
];

export default routes;
