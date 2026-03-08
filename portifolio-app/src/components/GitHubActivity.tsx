import { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";

function GitHubActivity() {
  const [calendarConfig, setCalendarConfig] = useState({
    blockSize: 11,
    blockMargin: 3,
    fontSize: 12,
  });

  useEffect(() => {
    const updateConfig = () => {
      if (window.innerWidth < 640) {
        setCalendarConfig({
          blockSize: 5.5,
          blockMargin: 2,
          fontSize: 10,
        });
      } else {
        setCalendarConfig({
          blockSize: 11,
          blockMargin: 3,
          fontSize: 12,
        });
      }
    };

    updateConfig();
    window.addEventListener("resize", updateConfig);

    return () => window.removeEventListener("resize", updateConfig);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto mb-8 text-left">
      <h2 className="text-xl font-bold mb-4">GitHub Activity</h2>

      <div className="w-full overflow-x-auto">
        <GitHubCalendar
          username="tauraigombera"
          blockSize={calendarConfig.blockSize}
          blockMargin={calendarConfig.blockMargin}
          fontSize={calendarConfig.fontSize}
        />
      </div>
    </div>
  );
}

export default GitHubActivity;