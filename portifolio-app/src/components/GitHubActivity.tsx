import { GitHubCalendar } from "react-github-calendar"

function GitHubActivity() {
  return (
    <div className="mb-8 text-left">
      <h2 className="text-xl font-bold mb-4">GitHub Activity</h2>
      <GitHubCalendar
        username="tauraigombera"
        blockSize={11}
        blockMargin={3}
        fontSize={12}
      />
    </div>
  )
}

export default GitHubActivity