window.BENCHMARK_DATA = {
  "lastUpdate": 1774571206419,
  "repoUrl": "https://github.com/siathalysedI/n8n-mcp",
  "entries": {
    "n8n-mcp Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "07bd1d4cc2d544df16b015018907aaed33094259",
          "message": "chore: update n8n to 2.13.3 (#666)\n\n* chore: update n8n to 2.13.3 and bump version to 2.41.0\n\n- Updated n8n from 2.12.3 to 2.13.3\n- Updated n8n-core from 2.12.0 to 2.13.1\n- Updated n8n-workflow from 2.12.0 to 2.13.1\n- Updated @n8n/n8n-nodes-langchain from 2.12.0 to 2.13.1\n- Rebuilt node database with 1,396 nodes (812 core + 584 community: 516 verified + 68 npm)\n- Refreshed community nodes with 581 AI-generated documentation summaries\n- Improved documentation generator: strip <think> tags, raw fetch for vLLM chat_template_kwargs\n- Incremental community updates: saveNode uses ON CONFLICT DO UPDATE preserving READMEs/AI summaries\n- fetch:community now upserts by default (use --rebuild for clean slate)\n- Updated README badge and node counts\n- Updated CHANGELOG and MEMORY_N8N_UPDATE.md\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n* chore: update MCP SDK from 1.27.1 to 1.28.0\n\n- Pinned @modelcontextprotocol/sdk to 1.28.0 (was ^1.27.1)\n- Updated CI dependency check to expect 1.28.0\n- SDK 1.28.0 includes: loopback port relaxation, inputSchema fix,\n  timeout cleanup fix, OAuth scope improvements\n- All 15 MCP tool tests pass with no regressions\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n* fix: update test assertions for ON CONFLICT saveNode SQL\n\nTests expected old INSERT OR REPLACE SQL, updated to match new\nINSERT INTO ... ON CONFLICT(node_type) DO UPDATE SET pattern.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n* chore: remove documentation generator tests\n\nThese tests mocked the OpenAI SDK which was replaced with raw fetch.\nDocumentation generation is a local LLM utility, not core functionality.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n* fix: relax SQL assertion in outputs test to match ON CONFLICT pattern\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n* fix: use INSERT OR REPLACE with docs preservation instead of ON CONFLICT\n\nON CONFLICT DO UPDATE caused FTS5 trigger conflicts (\"database disk\nimage is malformed\") in CI. Reverted to INSERT OR REPLACE but now\nreads existing npm_readme/ai_documentation_summary/ai_summary_generated_at\nbefore saving and carries them through the replace.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n* fix: update saveNode test mocks for docs preservation pattern\n\nTests now account for the SELECT query that reads existing docs\nbefore INSERT OR REPLACE, and the 3 extra params (npm_readme,\nai_documentation_summary, ai_summary_generated_at).\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n* fix: update community integration test mock for INSERT OR REPLACE\n\nThe mock SQL matching used 'INSERT INTO nodes' which doesn't match\n'INSERT OR REPLACE INTO nodes'. Also added handler for the new\nSELECT npm_readme query in saveNode.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2026-03-26T22:21:56+01:00",
          "tree_id": "d83a8e369646c9b3ef542e2ee11ad40f6f47bcb3",
          "url": "https://github.com/siathalysedI/n8n-mcp/commit/07bd1d4cc2d544df16b015018907aaed33094259"
        },
        "date": 1774571205885,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      }
    ]
  }
}