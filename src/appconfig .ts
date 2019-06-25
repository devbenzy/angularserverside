

let agentRef: string;
export const AppConfig = (agent?: string):string => {
	if (agent) {
	  agentRef = agent;
	}

	return agentRef;
};