"use server";

import getSession from "./getSession";
import { SessionData } from "./session";

export async function saveSession(session: SessionData): Promise<void> {
    // Check if session exists
    let existingSession = await getSession();
  
    // Assign session properties
    existingSession.isCookieAccepted = session.isCookieAccepted;
    existingSession.isLoggedIn = session.isLoggedIn;
  
    // Save the session
    await existingSession.save();
  }