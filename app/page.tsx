import { ActivityCard } from "@/components/server/post-card";
import { getAllActivities } from "@/data/activity";

export default async function Page() {
    const activities = getAllActivities().slice(0,7);
  return (
    <>
      <h1 className="text-3xl font-bold opacity-90 py-6 px-3">Recent Activity</h1>
      <div className="flex flex-col gap-5">
        {activities.map((activity, idx) => (
          <ActivityCard activity={activity} key={idx} />
        ))}
      </div>
    </>
  );
}
