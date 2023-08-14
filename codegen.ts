
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://wpe-hiring.tokopedia.net/graphql",
  documents: "src/GraphQL/**/*.graphql",
  generates: {
    "src/graphql/generated/graphql.tsx": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
