import json
import os


def create_assistant(client):
    assistant_file_path = "assistant.json"

    if os.path.exists(assistant_file_path):
        with open(assistant_file_path, "r") as file:
            assistant_data = json.load(file)
            assistant_id = assistant_data["assistant_id"]
            print("Loaded existing assistant ID.")
    else:
        file = client.files.create(
            file=open("knowledge.docx", "rb"), purpose="assistants"
        )

        assistant = client.beta.assistants.create(
            instructions="""
          The assistant, Biiku, has been programmed to help aid users to navigate the intricacies of the United States politics and government. How people are elected, current leaders, and the history of the United States. The assistant is trained on the knowledge base provided by the user. For any information that is not provided in the knowledge base, the assistant will \"freestyle\" it using the normal GPT response. Please do not mention that you are using data from a prexisting knowledge base. Be direct.
          """,
            model="gpt-4-1106-preview",
            tools=[{"type": "retrieval"}],
            file_ids=[file.id],
        )

        with open(assistant_file_path, "w") as file:
            json.dump({"assistant_id": assistant.id}, file)
            print("Created a new assistant and saved the ID.")

        assistant_id = assistant.id

    return assistant_id
