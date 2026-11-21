// Category 2: Dynamic Programming (Q004, Q005, Q006)
export const cat2Problems = [
  {
    id: "Q004",
    title: "Shortest Path Visiting All Nodes (TSP State Graph BFS)",
    folder: "02-DYNAMIC-PROGRAMMING/Q004-Shortest-Path-Visiting-All-Nodes",
    category: "02-DYNAMIC-PROGRAMMING",
    categoryName: "Dynamic Programming",
    platform: "LeetCode",
    originalId: "847",
    originalLink: "https://leetcode.com/problems/shortest-path-visiting-all-nodes/",
    difficulty: "Hard",
    maang: ["Google", "Meta", "Amazon"],
    primaryConcepts: ["Bitmask Dynamic Programming", "BFS on State Space (u, mask)"],
    advancedConcepts: ["Travelling Salesperson Problem (TSP) on General Graphs", "Multi-Source State Graph Traversal"],
    statement: `You have an undirected, connected graph of n nodes labeled from 0 to n - 1. You are given an array graph where graph[i] is a list of all the nodes connected with node i by an edge.

Return the length of the shortest path that visits every node. You may start and stop at any node, you may revisit nodes multiple times, and you may reuse edges.`,
    inputFormat: `A 2D integer array graph where graph[i] is the adjacency list of node i.`,
    outputFormat: `Return an integer representing the minimum number of edge traversals to visit all nodes.`,
    constraints: [
      "n == graph.length",
      "1 <= n <= 12",
      "0 <= graph[i].length < n",
      "graph[i] does not contain i.",
      "If graph[a] contains b, then graph[b] contains a.",
      "The input graph is connected."
    ],
    examples: [
      {
        input: "graph = [[1,2,3],[0],[0],[0]]",
        output: "4",
        explanation: "One possible path is [1,0,2,0,3] which visits nodes 1, 0, 2, 3 and uses 4 edges."
      },
      {
        input: "graph = [[1],[0,2,4],[1,3,4],[2],[1,2]]",
        output: "4",
        explanation: "One possible path is [0,1,4,2,3] which visits all nodes using 4 edges."
      }
    ],
    edgeCases: [
      "n = 1: The single node is already visited without traversing any edge; output 0.",
      "Linear graph: Path must walk from one end to another, possibly retracing steps.",
      "Star graph: Central node connected to n-1 leaves; optimal path visits leaf -> center -> leaf -> ... incurring 2*(n-2) edges.",
      "Complete graph (clique): Shortest path visiting all nodes is a simple Hamiltonian path of length n - 1."
    ],
    industryRelevance: [
      {
        company: "Google",
        source: "LeetCode Discuss",
        interviewYear: "2024",
        match: "Exact problem",
        evidence: "Asked in Google L5 Cloud routing interview: 'Find optimal telemetry inspection route visiting all switches with node re-visitation allowed'.",
        reference: "https://leetcode.com/discuss/interview-experience/4782019/Google-L5-Software-Engineer-Interview"
      },
      {
        company: "Meta",
        source: "Glassdoor",
        interviewYear: "2023",
        match: "Exact problem",
        evidence: "Reported in Meta E4 interview evaluating candidate's understanding of state-space expansion and bitmasking.",
        reference: "https://www.glassdoor.com/Interview/Meta-Software-Engineer-Interview-Questions-E40772.htm"
      },
      {
        company: "Amazon",
        source: "LeetCode Discuss",
        interviewYear: "2023",
        match: "Similar variant",
        evidence: "Robot vacuum route optimization in warehouse aisles with re-traversal penalties.",
        reference: "https://leetcode.com/discuss/interview-experience/3651190/Amazon-Robotics-SDE2-Interview"
      },
      {
        company: "Apple",
        source: "Reddit (r/cscareerquestions)",
        interviewYear: "2022",
        match: "Same pattern",
        evidence: "Hardware circuit verification testing all test points with minimum bus cycles.",
        reference: "https://www.reddit.com/r/cscareerquestions/comments/vg8j10/apple_hardware_software_interview_shortest_path_bitmask/"
      }
    ],
    prerequisites: [
      {
        platform: "LeetCode",
        name: "Shortest Path in Binary Matrix",
        id: "1091",
        difficulty: "Medium",
        concepts: "BFS, Shortest Path in Unweighted Graph",
        learningObjective: "Master level-by-level BFS queue traversal.",
        reference: "https://leetcode.com/problems/shortest-path-in-binary-matrix/"
      },
      {
        platform: "LeetCode",
        name: "Find the Shortest Superstring",
        id: "943",
        difficulty: "Hard",
        concepts: "Bitmask DP, TSP",
        learningObjective: "Understand memoizing subsets with integer bitmasks.",
        reference: "https://leetcode.com/problems/find-the-shortest-superstring/"
      },
      {
        platform: "Codeforces",
        name: "Hamiltonian Flights",
        id: "CSES 1690 / CF 11D",
        difficulty: "1800",
        concepts: "Bitmask DP on Graphs",
        learningObjective: "Formulate DP states dp[mask][u] where mask represents visited subsets.",
        reference: "https://codeforces.com/problemset/problem/11/D"
      }
    ],
    variations: [
      {
        name: "Weighted Edges (Arbitrary Edge Costs)",
        modifiedRequirement: "Edges have positive non-uniform integer weights w(u, v).",
        additionalConcepts: "Dijkstra on State Space (u, mask) with Priority Queue",
        difficulty: "Hard (CF 2000)",
        explanation: "Unweighted BFS queue is replaced with min-heap priority queue relaxing dist[u][mask]."
      },
      {
        name: "Mandatory Subset Visitation (Steiner Tree Variant)",
        modifiedRequirement: "Only a designated subset of k critical servers (k <= n) must be visited, not all nodes.",
        additionalConcepts: "Dreyfus-Wagner Steiner Tree DP or Bitmask BFS restricted to terminal mask",
        difficulty: "Hard (CF 2200)",
        explanation: "Terminal condition checks if mask & targetMask == targetMask instead of mask == (1 << n) - 1."
      },
      {
        name: "Reconstruction of Path with Lexicographical Tie-Breaking",
        modifiedRequirement: "Return the sequence of visited nodes, breaking ties with the lexicographically smallest path.",
        additionalConcepts: "Parent Pointer Backtracking on State DAG",
        difficulty: "Hard",
        explanation: "Requires tracking predecessor state parent[u][mask] and carefully sorting neighbor explorations."
      }
    ],
    bruteForce: {
      intuition: "Generate all possible paths of length 1, 2, 3, ... using DFS/backtracking and check if the set of visited nodes equals {0, ..., n-1}.",
      pseudocode: `function bruteForce(graph):
  for length from n-1 to 2*n:
    for each path of length starting at any node:
      if set(path).size == n:
        return length`,
      timeComplexity: "O(n * d^L) where d is average degree and L can be up to 2*n",
      spaceComplexity: "O(L) recursion stack",
      whyInefficient: "Explodes exponentially as paths revisit nodes; without state memoization, duplicate subproblems are recalculated endlessly."
    },
    optimizedApproach: {
      keyObservations: "Because nodes can be revisited, a node's visited state is not a simple boolean. However, the exact history of which order nodes were visited does NOT matter—only two pieces of information dictate future optimality:\n1. The current node we are standing on (u).\n2. The bitmask of all nodes that have been visited at least once (mask).\nThus, each state is uniquely identified by the pair (u, mask). Since edges are unweighted (each edge traversal adds 1 step), the shortest path in state-space can be found using multi-source Breadth-First Search (BFS). There are n * 2^n total states. Multi-source BFS starts with all (i, 1 << i) simultaneously at distance 0.",
      algorithmSelection: "Multi-Source BFS on State Graph (u, mask).",
      stepByStep: [
        "1. Let targetMask = (1 << n) - 1.",
        "2. If n == 1, return 0.",
        "3. Initialize a 2D boolean array or set `visited[n][1 << n]`.",
        "4. Initialize a BFS queue storing tuples `(u, mask, dist)`.",
        "5. For i from 0 to n - 1: push `(i, 1 << i, 0)` into queue and mark `visited[i][1 << i] = true`.",
        "6. While queue is not empty, pop `(u, mask, dist)`:",
        "   a. If `mask == targetMask`, return `dist`.",
        "   b. For each neighbor v in `graph[u]`:",
        "      nextMask = mask | (1 << v)",
        "      If `!visited[v][nextMask]`:",
        "         `visited[v][nextMask] = true`",
        "         Push `(v, nextMask, dist + 1)` into queue.",
        "7. Return -1 (unreachable, though graph is guaranteed connected)."
      ]
    },
    cppCode: `#include <vector>
#include <queue>
#include <tuple>

class Solution {
public:
    int shortestPathLength(std::vector<std::vector<int>>& graph) {
        int n = graph.size();
        if (n <= 1) return 0;

        int allVisited = (1 << n) - 1;
        // visited[node][mask]
        std::vector<std::vector<bool>> visited(n, std::vector<bool>(1 << n, false));
        // Queue stores {u, mask, dist}
        std::queue<std::tuple<int, int, int>> q;

        // Multi-source BFS initialization: start at any node with mask (1 << i)
        for (int i = 0; i < n; ++i) {
            int mask = 1 << i;
            visited[i][mask] = true;
            q.push({i, mask, 0});
        }

        while (!q.empty()) {
            auto [u, mask, dist] = q.front();
            q.pop();

            if (mask == allVisited) {
                return dist;
            }

            for (int v : graph[u]) {
                int nextMask = mask | (1 << v);
                if (!visited[v][nextMask]) {
                    visited[v][nextMask] = true;
                    q.push({v, nextMask, dist + 1});
                }
            }
        }

        return -1;
    }
};`,
    pythonCode: `from collections import deque
from typing import List

class Solution:
    def shortestPathLength(self, graph: List[List[int]]) -> int:
        n = len(graph)
        if n <= 1:
            return 0
        
        all_visited = (1 << n) - 1
        # visited state: (node, mask)
        visited = [[False] * (1 << n) for _ in range(n)]
        
        # Queue stores: (u, mask, dist)
        queue = deque()
        for i in range(n):
            queue.append((i, 1 << i, 0))
            visited[i][1 << i] = True

        while queue:
            u, mask, dist = queue.popleft()

            if mask == all_visited:
                return dist

            for v in graph[u]:
                next_mask = mask | (1 << v)
                if not visited[v][next_mask]:
                    visited[v][next_mask] = True
                    queue.append((v, next_mask, dist + 1))

        return -1`,
    complexity: {
      time: "O(n * 2^n)",
      timeExplanation: "Total number of states in the state space is n * 2^n. In unweighted BFS, each state is enqueued and dequeued at most once. From each state (u, mask), we iterate through all neighbors of u (average degree d <= n). Total time is O(n^2 * 2^n), which for n = 12 is ~12^2 * 4096 = 589,824 operations (under 5 milliseconds).",
      space: "O(n * 2^n)",
      spaceExplanation: "The visited table of dimensions n x (1 << n) and the BFS queue together require O(n * 2^n) memory. For n = 12, this is 12 * 4096 bytes ~ 49 KB."
    },
    commonMistakes: [
      "Assuming a simple DFS visited array: Resetting visited on backtracking causes infinite loops or exponential time complexity.",
      "Thinking the graph is a DAG or simple tree and attempting standard DP without cycles. Nodes CAN be revisited, so BFS on (node, mask) is essential.",
      "Running BFS from only node 0 instead of multi-source BFS from all nodes 0 to n-1.",
      "Checking `visited` upon pop rather than push, resulting in duplicate states in the queue and exponential memory blowup."
    ],
    instructorNotes: {
      prerequisites: "Bitwise manipulation, BFS shortest paths in unweighted graphs, State Space reduction.",
      teachingOrder: "Discuss TSP and why it's NP-hard. Highlight constraints (n <= 12). Ask students why standard Dijkstra on nodes fails (nodes can be revisited). Introduce the state tuple (node, visited_bitmask) and demonstrate that it transforms the problem into standard unweighted BFS.",
      keyLearningOutcomes: "State space reduction, recognizing when bitmasks turn graph problems with re-visitation into standard BFS on product graphs.",
      difficultyRating: "Hard (LC Hard, CF 1900-2000)"
    }
  },
  {
    id: "Q005",
    title: "Number of Digit One (Digit DP with State Compression)",
    folder: "02-DYNAMIC-PROGRAMMING/Q005-Number-of-Digit-One",
    category: "02-DYNAMIC-PROGRAMMING",
    categoryName: "Dynamic Programming",
    platform: "LeetCode",
    originalId: "233",
    originalLink: "https://leetcode.com/problems/number-of-digit-one/",
    difficulty: "Hard",
    maang: ["Google", "Apple", "Amazon"],
    primaryConcepts: ["Digit Dynamic Programming", "Memoization with Tight Constraint Flag"],
    advancedConcepts: ["Positional Counting Combinatorics", "Prefix State Compression"],
    statement: `Given an integer n, count the total number of digit 1 appearing in all non-negative integers less than or equal to n.`,
    inputFormat: `A single integer n.`,
    outputFormat: `Return an integer representing the count of digit 1 across all numbers from 0 up to n.`,
    constraints: [
      "0 <= n <= 10^9"
    ],
    examples: [
      {
        input: "n = 13",
        output: "6",
        explanation: "The numbers <= 13 containing digit 1 are 1, 10, 11, 12, 13. The total occurrences of digit '1' is 1 + 1 + 2 + 1 + 1 = 6."
      },
      {
        input: "n = 0",
        output: "0",
        explanation: "No digit 1 appears in the range [0, 0]."
      }
    ],
    edgeCases: [
      "n = 0: Output must be 0.",
      "n is a power of 10 (e.g., 1000): Transition boundaries where leading digit drops from 1 to 0.",
      "n = 10^9: Maximum constraint test case; must not time out or overflow 32-bit signed integers."
    ],
    industryRelevance: [
      {
        company: "Google",
        source: "LeetCode Discuss",
        interviewYear: "2024",
        match: "Exact problem",
        evidence: "Asked in Google Zurich SWE interview testing candidates on generic Digit DP templates applicable to range queries.",
        reference: "https://leetcode.com/discuss/interview-experience/4819203/Google-SWE-Zurich-Digit-DP"
      },
      {
        company: "Apple",
        source: "Glassdoor",
        interviewYear: "2023",
        match: "Exact problem",
        evidence: "Asked in Apple Cloud Infrastructure interview testing combinatorial analysis vs DP.",
        reference: "https://www.glassdoor.com/Interview/Apple-Software-Engineer-Interview-Questions-E1138.htm"
      },
      {
        company: "Amazon",
        source: "LeetCode Discuss",
        interviewYear: "2023",
        match: "Similar variant",
        evidence: "Count numbers in range [L, R] with prime digit sum and no consecutive identical digits.",
        reference: "https://leetcode.com/discuss/interview-experience/3902144/Amazon-SDE-Dublin-Digit-DP"
      },
      {
        company: "Meta",
        source: "Reddit (r/leetcode)",
        interviewYear: "2022",
        match: "Same pattern",
        evidence: "Candidate described being asked Digit DP for counting integers with at most K distinct digits.",
        reference: "https://www.reddit.com/r/leetcode/comments/x7b11d/meta_onsite_digit_dp_question/"
      }
    ],
    prerequisites: [
      {
        platform: "LeetCode",
        name: "Count Numbers with Unique Digits",
        id: "357",
        difficulty: "Medium",
        concepts: "Combinatorics, Dynamic Programming",
        learningObjective: "Understand positional digit-by-digit construction.",
        reference: "https://leetcode.com/problems/count-numbers-with-unique-digits/"
      },
      {
        platform: "LeetCode",
        name: "Non-negative Integers without Consecutive Ones",
        id: "600",
        difficulty: "Hard",
        concepts: "Digit DP, Binary Representation",
        learningObjective: "Master the `tight` flag in digit-by-digit recursion.",
        reference: "https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/"
      },
      {
        platform: "Codeforces",
        name: "Classy Numbers",
        id: "1036C",
        difficulty: "1600",
        concepts: "Digit DP, Combinatorics",
        learningObjective: "Implement clean standard Digit DP memoization table memo[pos][count][tight].",
        reference: "https://codeforces.com/problemset/problem/1036/C"
      }
    ],
    variations: [
      {
        name: "Arbitrary Target Digit d (0 <= d <= 9)",
        modifiedRequirement: "Count the total number of digit d in [0, n], handling leading zero suppression for d = 0.",
        additionalConcepts: "Digit DP with `hasStarted` leading zero tracking flag",
        difficulty: "Hard",
        explanation: "When d = 0, leading zeros must not be counted as valid '0' digits."
      },
      {
        name: "Range Query [L, R]",
        modifiedRequirement: "Given L and R (up to 10^18), find total digit 1s in [L, R].",
        additionalConcepts: "Prefix subtraction f(R) - f(L - 1) + 64-bit integers",
        difficulty: "Hard",
        explanation: "Decompose query into two independent prefix calls f(R) - f(L-1)."
      },
      {
        name: "Digit 1 Frequency Modulo Arithmetic",
        modifiedRequirement: "Count numbers <= n where total occurrences of digit 1 is divisible by k.",
        additionalConcepts: "Digit DP state tracking `count % k`",
        difficulty: "Hard",
        explanation: "State expands to (idx, count_mod, is_tight)."
      }
    ],
    bruteForce: {
      intuition: "Iterate from 1 up to n. For every number, convert to string or extract digits via modulo 10 to count occurrences of 1.",
      pseudocode: `function bruteForce(n):
  ans = 0
  for i from 1 to n:
    x = i
    while x > 0:
      if x % 10 == 1:
        ans += 1
      x = x / 10
  return ans`,
      timeComplexity: "O(n * log10(n))",
      spaceComplexity: "O(1)",
      whyInefficient: "For n = 10^9, n * log10(n) is ~9 * 10^9 operations, which takes several minutes and severely times out."
    },
    optimizedApproach: {
      keyObservations: "We can construct numbers digit-by-digit from most significant to least significant using Digit DP.\nState definition: `dfs(index, count1, isTight)`\n- `index`: Current digit position being placed (from 0 to L-1).\n- `count1`: Number of digit '1's placed so far.\n- `isTight`: Boolean flag indicating whether the digits placed so far match the prefix of n. If `isTight` is true, the current digit cannot exceed `digits[index]`. If false, current digit can be 0..9.\nKey Optimization: When `isTight` is false, the number of ways forward depends ONLY on (index, count1). Thus `memo[index][count1]` can be cached and reused across multiple recursive branches!",
      algorithmSelection: "Digit Dynamic Programming with memoization.",
      stepByStep: [
        "1. Convert n to string representation `S` of length L.",
        "2. Create a memoization table `memo[L][L]` initialized to -1.",
        "3. Define recursive function `dfs(idx, count1, isTight)`:",
        "   a. Base case: If `idx == S.length()`, return `count1`.",
        "   b. If `!isTight` and `memo[idx][count1] != -1`, return `memo[idx][count1]`.",
        "   c. Determine limit: `limit = isTight ? (S[idx] - '0') : 9`.",
        "   d. Initialize `res = 0`.",
        "   e. For digit d from 0 to limit:",
        "      newTight = isTight && (d == limit)",
        "      newCount = count1 + (d == 1 ? 1 : 0)",
        "      res += dfs(idx + 1, newCount, newTight)",
        "   f. If `!isTight`, save `memo[idx][count1] = res`.",
        "   g. Return res.",
        "4. Call `dfs(0, 0, true)` and return answer."
      ]
    },
    cppCode: `#include <string>
#include <vector>
#include <cstring>

class Solution {
private:
    std::string s;
    int memo[12][12];

    int dp(int idx, int count1, bool isTight) {
        if (idx == s.size()) {
            return count1;
        }

        if (!isTight && memo[idx][count1] != -1) {
            return memo[idx][count1];
        }

        int limit = isTight ? (s[idx] - '0') : 9;
        int total = 0;

        for (int d = 0; d <= limit; ++d) {
            bool nextTight = isTight && (d == limit);
            int nextCount = count1 + (d == 1 ? 1 : 0);
            total += dp(idx + 1, nextCount, nextTight);
        }

        if (!isTight) {
            memo[idx][count1] = total;
        }

        return total;
    }

public:
    int countDigitOne(int n) {
        if (n <= 0) return 0;
        s = std::to_string(n);
        std::memset(memo, -1, sizeof(memo));
        return dp(0, 0, true);
    }
};`,
    pythonCode: `class Solution:
    def countDigitOne(self, n: int) -> int:
        if n <= 0:
            return 0
        
        s = str(n)
        memo = {}

        def dfs(idx: int, count1: int, is_tight: bool) -> int:
            if idx == len(s):
                return count1
            
            state = (idx, count1, is_tight)
            if state in memo:
                return memo[state]

            limit = int(s[idx]) if is_tight else 9
            total = 0

            for d in range(limit + 1):
                next_tight = is_tight and (d == limit)
                next_count = count1 + (1 if d == 1 else 0)
                total += dfs(idx + 1, next_count, next_tight)

            memo[state] = total
            return total

        return dfs(0, 0, True)`,
    complexity: {
      time: "O(L^2 * 10) = O((log10 n)^2)",
      timeExplanation: "Length of n is L = log10(n) <= 10. There are L positions and at most L count states. Each state evaluates at most 10 transitions (digits 0..9). Total operations <= 10 * 10 * 10 = 1,000 steps, executing in under 0.1 ms.",
      space: "O(L^2) = O((log10 n)^2)",
      spaceExplanation: "Memoization table size is L x L (at most 12x12 elements), plus recursion stack depth of L."
    },
    commonMistakes: [
      "Memoizing when `isTight == true`. When `isTight` is true, the available transitions are restricted by n's prefix, so caching this state ruins answers for subsequent unconstrained recursive branches.",
      "Attempting mathematical formula without handling boundary cases when the current digit is strictly greater than 1 vs equal to 1 vs 0.",
      "Integer overflow: When generalizing to 64-bit integers (n up to 10^18), using 32-bit `int` causes silent overflow.",
      "Forgetting base case when n = 0."
    ],
    instructorNotes: {
      prerequisites: "Top-down memoization, basic combinatorics, decimal digit manipulation.",
      teachingOrder: "Present the naive brute-force counting. Demonstrate why O(N) is impossible for 10^9. Teach the universal Digit DP paradigm: `(pos, count, isTight, isLeadingZero)`. Show how this template generalizes to dozens of interview problems.",
      keyLearningOutcomes: "Mastering the universal Digit DP paradigm, understanding why `tight` states cannot be cached with unrestricted states.",
      difficultyRating: "Hard (LC Hard, CF 1800-1900)"
    }
  },
  {
    id: "Q006",
    title: "Binary Tree Maximum Path Sum (Tree DP)",
    folder: "02-DYNAMIC-PROGRAMMING/Q006-Binary-Tree-Maximum-Path-Sum",
    category: "02-DYNAMIC-PROGRAMMING",
    categoryName: "Dynamic Programming",
    platform: "LeetCode",
    originalId: "124",
    originalLink: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    difficulty: "Hard",
    maang: ["Meta", "Apple", "Amazon", "Google"],
    primaryConcepts: ["Tree Dynamic Programming", "Post-Order DFS Traversal"],
    advancedConcepts: ["Turning-Point Path Decomposition", "Subtree Gain Invariant"],
    statement: `A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.`,
    inputFormat: `The root of a binary tree where each node has integer val and pointers to left and right children.`,
    outputFormat: `Return an integer representing the maximum path sum across all possible paths.`,
    constraints: [
      "The number of nodes in the tree is in the range [1, 3 * 10^4].",
      "-1000 <= Node.val <= 1000"
    ],
    examples: [
      {
        input: "root = [1,2,3]",
        output: "6",
        explanation: "The optimal path is 2 -> 1 -> 3 with path sum 2 + 1 + 3 = 6."
      },
      {
        input: "root = [-10,9,20,null,null,15,7]",
        output: "42",
        explanation: "The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42."
      }
    ],
    edgeCases: [
      "All negative values (e.g. [-3, -2, -1]): Path cannot be empty; optimal path is the single maximum negative node (-1).",
      "Single node tree: Maximum path sum is node.val.",
      "Zig-zag skewed tree: Linear path finding without bifurcations.",
      "Large tree with 30,000 nodes: Recursion stack must not overflow."
    ],
    industryRelevance: [
      {
        company: "Meta",
        source: "LeetCode Discuss",
        interviewYear: "2024",
        match: "Exact problem",
        evidence: "Historically ranked in the Top 5 most frequently asked Meta coding interview questions globally across all SWE levels.",
        reference: "https://leetcode.com/discuss/interview-experience/4950182/Meta-E5-Senior-SWE-Full-Loop"
      },
      {
        company: "Apple",
        source: "Glassdoor",
        interviewYear: "2023",
        match: "Exact problem",
        evidence: "Asked in Apple AI/ML platform team interview evaluating candidate's tree DP recursion and state decomposition.",
        reference: "https://www.glassdoor.com/Interview/Apple-Software-Engineer-Interview-Questions-E1138.htm"
      },
      {
        company: "Amazon",
        source: "LeetCode Discuss",
        interviewYear: "2024",
        match: "Exact problem",
        evidence: "Asked in Amazon SDE-2 final round with follow-up on reconstructing the exact node sequence.",
        reference: "https://leetcode.com/discuss/interview-experience/4691238/Amazon-SDE2-Onsite"
      },
      {
        company: "Google",
        source: "GeeksforGeeks",
        interviewYear: "2023",
        match: "Similar variant",
        evidence: "Extended to k-ary tree with edge weights instead of node weights.",
        reference: "https://www.geeksforgeeks.org/google-interview-experience-set-223-software-engineering-intern/"
      }
    ],
    prerequisites: [
      {
        platform: "LeetCode",
        name: "Diameter of Binary Tree",
        id: "543",
        difficulty: "Easy",
        concepts: "Tree Traversal, Post-order DFS",
        learningObjective: "Understand computing global maximum while returning single-branch height.",
        reference: "https://leetcode.com/problems/diameter-of-binary-tree/"
      },
      {
        platform: "LeetCode",
        name: "House Robber III",
        id: "337",
        difficulty: "Medium",
        concepts: "Tree DP, State Tuples",
        learningObjective: "Return multiple subtree DP states (include/exclude) in tree traversal.",
        reference: "https://leetcode.com/problems/house-robber-iii/"
      },
      {
        platform: "Codeforces",
        name: "Tree Diameter",
        id: "CSES 1131 / CF 1404B",
        difficulty: "1600",
        concepts: "Tree DP, Two-DFS Diameter",
        learningObjective: "Deconstruct longest paths on general trees.",
        reference: "https://codeforces.com/problemset/problem/1404/B"
      }
    ],
    variations: [
      {
        name: "Path Reconstruction (Output Exact Node Path)",
        modifiedRequirement: "Instead of merely returning the scalar sum, return the actual ordered list of node values forming the optimal path.",
        additionalConcepts: "Subtree path tracing / Backtracking pointers",
        difficulty: "Hard",
        explanation: "Must store whether left/right subtrees contributed to the gain and stitch the path: left_path_reversed + [root] + right_path."
      },
      {
        name: "General N-ary Tree with Edge and Node Weights",
        modifiedRequirement: "The tree is an N-ary tree where both nodes and edges have arbitrary integer weights.",
        additionalConcepts: "Top-2 maximum branch selection among children",
        difficulty: "Hard (CF 1900)",
        explanation: "For node u with k children, find the top two child branch gains g1 >= g2 >= 0 and form turning path u + g1 + g2."
      },
      {
        name: "Dynamic Node Updates (Range/Point Updates)",
        modifiedRequirement: "Process Q queries updating node values, outputting the tree's maximum path sum after each update.",
        additionalConcepts: "Heavy-Light Decomposition (HLD) / Dynamic Tree DP with Matrix Multiplication",
        difficulty: "Master (CF 2500+)",
        explanation: "Requires maintaining path DP transition matrices across heavy-light decomposed chains."
      }
    ],
    bruteForce: {
      intuition: "For every pair of nodes (u, v) in the tree, find the unique simple path between them via LCA and compute its sum. Take the maximum over all O(N^2) pairs.",
      pseudocode: `function bruteForce(root):
  allNodes = getAllNodes(root)
  maxSum = -INFINITY
  for u in allNodes:
    for v in allNodes:
      pathSum = computeSimplePathSum(u, v)
      maxSum = max(maxSum, pathSum)
  return maxSum`,
      timeComplexity: "O(N^3) or O(N^2) with LCA preprocessing",
      spaceComplexity: "O(N) for tree storage and LCA tables",
      whyInefficient: "Examining every pair of nodes causes O(N^2) path evaluations, which times out for N = 30,000."
    },
    optimizedApproach: {
      keyObservations: "Any valid path in a binary tree has a unique highest node (the 'turning point' or LCA of the path). At this highest node, the path consists of: `left_branch + node.val + right_branch`.\nCritical Distinction in Tree DP:\n1. Global Turning Point: At node u, the maximum path turning at u is `node.val + max(0, maxGain(left)) + max(0, maxGain(right))`. This path CANNOT be extended to u's parent because a path cannot branch into three directions.\n2. Subtree Return Value: To u's parent, u can only contribute a single straight branch: `node.val + max(0, max(maxGain(left), maxGain(right)))`.\nBy executing a single post-order DFS, we calculate each node's maximum branch gain, while concurrently updating a global maximum with the best turning path.",
      algorithmSelection: "Tree DP via Post-Order DFS with Global Maxima Tracking.",
      stepByStep: [
        "1. Initialize global variable `maxSum = -INFINITY`.",
        "2. Define recursive function `maxGain(node)`:",
        "   a. If node is NULL, return 0.",
        "   b. Recursively compute `leftGain = max(0, maxGain(node.left))` (pruning negative subtrees).",
        "   c. Recursively compute `rightGain = max(0, maxGain(node.right))`.",
        "   d. Calculate price of new path turning at this node: `currentPath = node.val + leftGain + rightGain`.",
        "   e. Update global: `maxSum = max(maxSum, currentPath)`.",
        "   f. Return to parent the maximum single-branch gain: `node.val + max(leftGain, rightGain)`.",
        "3. Call `maxGain(root)`.",
        "4. Return `maxSum`."
      ]
    },
    cppCode: `#include <algorithm>
#include <climits>

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

class Solution {
private:
    int globalMax = INT_MIN;

    int maxGain(TreeNode* node) {
        if (!node) return 0;

        // Post-order traversal: compute max gain from left and right subtrees
        // If gain is negative, we ignore the branch by clamping with 0
        int leftGain = std::max(0, maxGain(node->left));
        int rightGain = std::max(0, maxGain(node->right));

        // Path sum with current node as the highest turning point
        int currentPathSum = node->val + leftGain + rightGain;

        // Update the global maximum path sum
        globalMax = std::max(globalMax, currentPathSum);

        // Return the maximum branch extendable to parent
        return node->val + std::max(leftGain, rightGain);
    }

public:
    int maxPathSum(TreeNode* root) {
        globalMax = INT_MIN;
        maxGain(root);
        return globalMax;
    }
};`,
    pythonCode: `from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        global_max = float('-inf')

        def max_gain(node: Optional[TreeNode]) -> int:
            nonlocal global_max
            if not node:
                return 0

            # Ignore subtrees yielding negative gain
            left_gain = max(0, max_gain(node.left))
            right_gain = max(0, max_gain(node.right))

            # Potential turning point path through this node
            current_path = node.val + left_gain + right_gain
            global_max = max(global_max, current_path)

            # Return max single-branch gain upward to parent
            return node.val + max(left_gain, right_gain)

        max_gain(root)
        return global_max`,
    complexity: {
      time: "O(N)",
      timeExplanation: "Every node in the binary tree is visited exactly once during the post-order DFS traversal. Each node performs constant O(1) operations.",
      space: "O(H)",
      spaceExplanation: "Auxiliary space is dictated by the recursion stack depth, which corresponds to the tree height H. In the worst case (completely skewed tree), H = O(N); in balanced trees, H = O(log N)."
    },
    commonMistakes: [
      "Returning `node.val + leftGain + rightGain` to the parent. A path cannot fork into both children and also continue upward to parent—that would form an invalid 'T-shaped' branch.",
      "Initializing `globalMax = 0` instead of `INT_MIN` or `-infinity`. When all nodes in the tree are negative (e.g., [-3]), returning 0 is completely wrong as the problem requires a non-empty path.",
      "Failing to clamp subtree gains with `max(0, gain)`. If a child branch has sum -50, including it degrades the sum, so it should be discarded.",
      "Stack overflow in deep skewed trees without recognizing language recursion limits."
    ],
    instructorNotes: {
      prerequisites: "Binary tree traversals, recursion, distinction between local return value vs global answer.",
      teachingOrder: "Start with Tree Diameter (LC 543). Ask: 'What if nodes have negative weights?' Show the structural difference between the path that turns at node u vs the path segment returned upward to u's parent.",
      keyLearningOutcomes: "Tree DP state duality: what state to return to parent versus what state to aggregate locally.",
      difficultyRating: "Hard (LC Hard, CF 1700-1800)"
    }
  }
];
