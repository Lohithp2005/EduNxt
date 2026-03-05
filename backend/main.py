from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from google import genai
from dotenv import load_dotenv
import os
import json

load_dotenv()

client = genai.Client(api_key=os.getenv("GOOGLE_API_KEY"))

app = FastAPI()


@app.get("/")
def read_root():
    return {"message": "Course API running"}


@app.post("/api/course")
async def generate_course():

    topic = "addition"
    language = "English"

    prompt = f"""
Create a simple learning flow for children about {topic}.
Language: {language}

Return ONLY JSON:

{{
 "steps":[
   {{"title":"Theory","desc":"Learn the basics"}},
   {{"title":"Quiz","desc":"Practice questions"}},
   {{"title":"Flashcards","desc":"Revise key terms"}},
   {{"title":"Mini Test","desc":"Check understanding"}}
 ]
}}
"""

    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )

        text = response.text.replace("```json","").replace("```","").strip()
        data = json.loads(text)

        return JSONResponse(data)

    except Exception as e:
        return JSONResponse(
            status_code=500,
            content={"error": str(e)}
        )