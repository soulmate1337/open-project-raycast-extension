/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** OpenProject URL - Your OpenProject instance URL (e.g., https://community.openproject.org) */
  "apiUrl": string,
  /** API Key - Your OpenProject API key */
  "apiKey": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `create-ticket` command */
  export type CreateTicket = ExtensionPreferences & {}
  /** Preferences accessible in the `update-ticket` command */
  export type UpdateTicket = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `create-ticket` command */
  export type CreateTicket = {}
  /** Arguments passed to the `update-ticket` command */
  export type UpdateTicket = {}
}

