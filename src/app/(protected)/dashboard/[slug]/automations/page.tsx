import AutomationList from '@/components/global/automation-list';
import CreateAutomation from '@/components/global/create-automation';
import { Check } from 'lucide-react';
import React from 'react';

type Props = {};

const Page = (props: Props) => {
  // WIP: Connect Real time Automations List
  return (
    <div className="flex flex-row w-full h-screen">
      <div className="flex-1 p-5">
        <AutomationList />
      </div>
      <div className="lg:col-span-2">
        <div className="flex flex-col items-center rounded-xl bg-background-80 gap-y-6 p-5 border-[1px] overflow-hidden border-in-active">
          <div>
            <h2 className="text-xl text-center">Automations</h2>
            <p className="text-text-secondary text-right">
              Your Live Automations
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-y-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex items-start justify-between border-b pb-2"
                >
                  <div className="flex flex-col">
                    <h3 className="font-medium">
                      Direct traffic towards website
                    </h3>
                    <p className="text-text-secondary text-sm">
                      October 5th 2024
                    </p>
                  </div>
                  <Check />
                </div>
              ))}
            </div>
            <CreateAutomation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
