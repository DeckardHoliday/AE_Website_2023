import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config({
  path: "../../.env",
});
import Trello from "trello";
const id = process.env.TRELLO_BOARD;
const list_id = process.env.TRELLO_LIST;

const card_text = `
**Date Created:** ${new Date()}
**Comm Type:** Audio for Animation
`;

const trello = new Trello(process.env.TRELLO_API_KEY, process.env.TRELLO_TOKEN);

const lists = await trello.getListsOnBoard(id);

console.log(lists);

export async function submit_form(form_content = {}) {
  let commissioner_name;
  let submission_date = new Date();
  let comm_type;
  let comm_link;

  await trello.addCard(
    "Spruce Art",
    card_text,
    list_id,
    function (error, trelloCard) {
      if (error) {
        console.log(error);
        return false;
      } else {
        console.log("Card Added");
        return true;
      }
    }
  );
}
