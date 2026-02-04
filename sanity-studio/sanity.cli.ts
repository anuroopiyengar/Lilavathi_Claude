import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    // TODO: Replace with your actual project ID and dataset
    projectId: 'YOUR_PROJECT_ID',
    dataset: 'production',
  },
})
