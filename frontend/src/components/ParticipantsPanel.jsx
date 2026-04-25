import { motion } from "framer-motion";
import { Crown } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function ParticipantsPanel({ participants = [] }) {
  console.log(participants);

  if(!participants){
    return ;
  }

  return (
    <Card className="h-full rounded-lg border border-zinc-800 bg-zinc-900 py-0 text-zinc-100 ring-0">
      <CardHeader className="border-b border-zinc-800 px-4 py-4">
        <CardTitle className="text-sm font-semibold">
          Participants ({participants?.length})
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-2 px-3 py-3">
        {participants?.map((participant, index) => (
          <motion.div
            key={participant.userId}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.25 }}
            style={{ borderColor: participant.color }}
            className={`flex items-center border gap-3 rounded-lg px-2 py-2 hover:bg-zinc-800/70`}
          >
            <div
            style={{ backgroundColor: participant.color }}
              className={`flex size-9 items-center justify-center rounded-full text-sm font-semibold`}
            >
              {participant.name.charAt(0)}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate flex justify-between items-center text-sm font-medium text-zinc-100">
                <span>{participant.name}</span>
                <span>{participant.isOwner && <Crown />}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
    
  );
}

export default ParticipantsPanel;
