# jamesmotes.github.io

Google Analytics 4 is configured in `_config.yml` with measurement ID
`G-X807RF6LXQ`. The shared `_includes/head-custom.html` loads the Google tag on
every page in production builds. Local development builds omit tracking.
Deploy these changes through GitHub Pages before checking for live data.

To view visitor locations:

1. Sign in to [Google Analytics](https://analytics.google.com/) and select this
   site's property.
2. Open **Reports → User attributes → Demographic details**.
3. Change the table's primary dimension from **Country** to **City**. Add
   **Region** as a secondary dimension to distinguish cities with the same name.
4. Set the date range. If the report is missing, use **Reports → Library** to
   publish the **User** collection (Editor or Administrator access required).

After deployment, visit the live site and check **Reports → Realtime** for
activity within a few minutes. Standard reports can take 24–48 hours to process.
Browser tracking blockers can prevent your test visit from being recorded.
Tracking begins after installation; it cannot recover earlier visits.

City locations are approximate and do not establish university affiliation.

References: [Google tag setup](https://developers.google.com/tag-platform/gtagjs),
[Demographic details](https://support.google.com/analytics/answer/12948931),
[User collection](https://support.google.com/analytics/answer/12925132),
[Data freshness](https://support.google.com/analytics/answer/11198161).
