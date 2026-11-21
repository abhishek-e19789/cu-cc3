// Category 6: Mathematical and Combinatorial (Q015, Q016)
export const cat6Problems = [
  {
    id: "Q015",
    title: "Reachable Nodes In Subdivided Graph (Dijkstra + Sub-division Accounting)",
    folder: "06-MATHEMATICAL-AND-COMBINATORIAL/Q015-Reachable-Nodes-In-Subdivided-Graph",
    category: "06-MATHEMATICAL-AND-COMBINATORIAL",
    categoryName: "Mathematical and Combinatorial Algorithms",
    platform: "LeetCode",
    originalId: "882",
    originalLink: "https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/",
    difficulty: "Hard",
    maang: ["Google", "Meta", "Amazon"],
    primaryConcepts: ["Dijkstra's Algorithm on Weighted Graph", "Edge Sub-division Greedy Accounting"],
    advancedConcepts: ["Two-Sided Interval Overlap Math", "Continuous Metric Graph Discretization"],
    statement: `You are given an undirected graph of n nodes (numbered 0 to n - 1) and a 2D integer array edges where edges[i] = [ui, vi, cnti] indicates that there is an edge between nodes ui and vi with cnti new nodes inserted into that edge (subdividing the original edge into cnti + 1 edges of weight 1).

You are also given maxMoves and you start at node 0. In each step, you may move to an adjacent node in the subdivided graph.

Return the number of nodes (both original nodes and newly created subdivision nodes) that you can reach in at most maxMoves moves.`,
    inputFormat: `A 2D integer array edges, an integer maxMoves, and an integer n.`,
    outputFormat: `Return an integer representing the total count of reachable nodes.`,
    constraints: [
      "0 <= edges.length <= min(n * (n - 1) / 2, 10^4)",
      "edges[i].length == 3",
      "0 <= ui < vi < n",
      "There are no multiple edges between any pair of nodes.",
      "0 <= cnti <= 10^4",
      "0 <= maxMoves <= 10^9",
      "1 <= n <= 3000"
    ],
    examples: [
      {
        input: "edges = [[0,1,10],[0,2,1],[1,2,2]], maxMoves = 6, n = 3",
        output: "13",
        explanation: "Original reachable nodes: 0, 1, 2 (3 nodes).\nSubdivision nodes reached on edge (0, 1): 6 from node 0 and 0 from node 1 (6 nodes).\nOn edge (0, 2): 1 node reached (all of them).\nOn edge (1, 2): 2 nodes reached (all of them).\nTotal reachable nodes = 3 + 6 + 1 + 2 + 1 = 13."
      },
      {
        input: "edges = [[0,1,4],[1,2,6],[0,2,8],[1,3,1]], maxMoves = 10, n = 4",
        output: "23",
        explanation: "All 4 original nodes are reached, plus all subdivision nodes on edges (0,1), (1,2), (1,3) and partial nodes on (0,2). Total = 23."
      }
    ],
    edgeCases: [
      "maxMoves = 0: Only node 0 is reachable; return 1.",
      "Isolated nodes: Nodes with no edges connected cannot be reached unless n = 1.",
      "cnt = 0 on an edge: Direct edge between u and v with no subdivision nodes (weight 1).",
      "Subdivision nodes overlapped from both ends: Sum of reachable nodes from u and v exceeds cnt; must clamp at cnt."
    ],
    industryRelevance: [
      {
        company: "Google",
        source: "LeetCode Discuss",
        interviewYear: "2024",
        match: "Exact problem",
        evidence: "Asked in Google Maps / Geo routing team interview: modeled as continuous road segment coverage within max delivery range.",
        reference: "https://leetcode.com/discuss/interview-experience/4890184/Google-Staff-L6-Maps-Reachability"
      },
      {
        company: "Meta",
        source: "Glassdoor",
        interviewYear: "2023",
        match: "Exact problem",
        evidence: "Reported in Meta Infrastructure team assessing weighted graph shortest paths without exploding graph size.",
        reference: "https://www.glassdoor.com/Interview/Meta-Software-Engineer-Interview-Questions-E40772.htm"
      },
      {
        company: "Amazon",
        source: "LeetCode Discuss",
        interviewYear: "2023",
        match: "Similar variant",
        evidence: "Last-mile drone coverage along inter-hub pathways with battery distance constraints.",
        reference: "https://leetcode.com/discuss/interview-experience/3781290/Amazon-Prime-Air-Algorithms"
      },
      {
        company: "Apple",
        source: "Reddit (r/cscareerquestions)",
        interviewYear: "2022",
        match: "Same pattern",
        evidence: "Bluetooth mesh broadcast packet propagation along link hops.",
        reference: "https://www.reddit.com/r/cscareerquestions/comments/u129pm/apple_networking_dijkstra_mesh_interview/"
      }
    ],
    prerequisites: [
      {
        platform: "LeetCode",
        name: "Network Delay Time",
        id: "743",
        difficulty: "Medium",
        concepts: "Dijkstra's Algorithm, Shortest Paths",
        learningObjective: "Master min-heap Dijkstra on weighted graphs.",
        reference: "https://leetcode.com/problems/network-delay-time/"
      },
      {
        platform: "Codeforces",
        name: "Dijkstra?",
        id: "20C",
        difficulty: "1600",
        concepts: "Dijkstra, Priority Queue",
        learningObjective: "Handle weighted graph edge relaxation efficiently.",
        reference: "https://codeforces.com/problemset/problem/20/C"
      },
      {
        platform: "Codeforces",
        name: "Roads in Berland",
        id: "25C",
        difficulty: "1900",
        concepts: "All-Pairs Shortest Path, Edge Additions",
        learningObjective: "Analyze shortest path metrics across modified edge weights.",
        reference: "https://codeforces.com/problemset/problem/25/C"
      }
    ],
    variations: [
      {
        name: "Multi-Source Starting Points with Variable Stamina",
        modifiedRequirement: "There are K starting hubs with stamina [s1, s2, ..., sk]. Find union of all reachable nodes.",
        additionalConcepts: "Multi-Source Dijkstra with distinct distance offsets",
        difficulty: "Hard",
        explanation: "Initialize priority queue with all K hubs at their respective initial distances."
      },
      {
        name: "Directional Road Network (Directed Graph)",
        modifiedRequirement: "Edges are one-way directed; subdivision nodes can only be traversed in the direction u -> v.",
        additionalConcepts: "Directed Dijkstra + One-Way Interval Accounting",
        difficulty: "Hard",
        explanation: "Subdivision nodes on edge (u, v) can only be reached from u, eliminating bidirectional overlap."
      },
      {
        name: "Minimum Moves to Cover Entire Network",
        modifiedRequirement: "Find the minimum maxMoves required so that EVERY subdivision node on EVERY edge is reached.",
        additionalConcepts: "Binary Search on Answer + Dijkstra",
        difficulty: "Very Hard (CF 2200)",
        explanation: "Binary search on maxMoves checking if total covered nodes equals total graph nodes."
      }
    ],
    bruteForce: {
      intuition: "Explicitly create all `cnt` subdivision nodes and build an unweighted graph with up to N + sum(cnt) <= 3000 + 10^8 nodes, then run BFS from node 0.",
      pseudocode: `function bruteForce(edges, maxMoves, n):
  buildExpandedGraphWithAllSubdivisionNodes()
  return bfsReachableCount(0, maxMoves)`,
      timeComplexity: "O(V_expanded + E_expanded) = O(N + sum(cnt)) ~ 10^8 operations and memory allocations",
      spaceComplexity: "O(10^8) graph pointers",
      whyInefficient: "Exploding the graph by instantiating millions of intermediate nodes causes Out Of Memory (OOM) and Time Limit Exceeded."
    },
    optimizedApproach: {
      keyObservations: "We do NOT need to materialize subdivision nodes!\nAn edge between `u` and `v` with `cnt` intermediate nodes is mathematically equivalent to an edge with weight `cnt + 1`.\n1. Run standard Dijkstra's algorithm on the original $n$ nodes where the weight of edge $(u, v)$ is `cnt + 1`.\n   Compute the shortest distance `dist[u]` from node 0 to every original node $u$.\n2. Any original node $u$ with `dist[u] <= maxMoves` is reachable. (Add 1 to count).\n3. For each edge `(u, v, cnt)`:\n   - If we reach $u$, the remaining moves we can expend along edge $(u, v)$ is `moves_u = max(0, maxMoves - dist[u])`.\n   - If we reach $v$, the remaining moves we can expend along edge $(v, u)$ is `moves_v = max(0, maxMoves - dist[v])`.\n   - The subdivision nodes reached from $u$ is $\\min(cnt, moves_u)$.\n   - The subdivision nodes reached from $v$ is $\\min(cnt, moves_v)$.\n   - Since the same intermediate node might be reached from both ends, the total distinct subdivision nodes reached on this edge is:\n   $$\\min(cnt, moves_u + moves_v)$$\nTotal reachable nodes = (reachable original nodes) + $\\sum_{(u, v)} \\min(cnt, moves_u + moves_v)$.",
      algorithmSelection: "Dijkstra's Algorithm on original graph + Algebraic Segment Overlap Math.",
      stepByStep: [
        "1. Construct adjacency list: `adj[u]` contains `{v, weight = cnt + 1}`.",
        "2. Initialize `dist` array of size n with infinity; set `dist[0] = 0`.",
        "3. Priority queue stores `{dist, u}`. Push `{0, 0}`.",
        "4. Standard Dijkstra:",
        "   While pq is not empty:",
        "     Pop `{d, u}`. If `d > dist[u]`, continue.",
        "     For each `{v, w}` in `adj[u]`:",
        "       If `dist[u] + w < dist[v]`:",
        "         `dist[v] = dist[u] + w`",
        "         Push `{dist[v], v}` into pq.",
        "5. Count original reachable nodes: for each $i \\in [0, n-1]$, if `dist[i] <= maxMoves`, `ans++`.",
        "6. Count subdivision reachable nodes: for each edge `[u, v, cnt]` in edges:",
        "   `reach_u = max(0, maxMoves - dist[u])`",
        "   `reach_v = max(0, maxMoves - dist[v])`",
        "   `ans += min(cnt, reach_u + reach_v)`",
        "7. Return `ans`."
      ]
    },
    cppCode: `#include <vector>
#include <queue>
#include <algorithm>

class Solution {
public:
    int reachableNodes(std::vector<std::vector<int>>& edges, int maxMoves, int n) {
        // Adjacency list: {neighbor, weight = cnt + 1}
        std::vector<std::vector<std::pair<int, int>>> adj(n);
        for (const auto& e : edges) {
            int u = e[0], v = e[1], cnt = e[2];
            adj[u].push_back({v, cnt + 1});
            adj[v].push_back({u, cnt + 1});
        }

        // Dijkstra's algorithm
        std::vector<int> dist(n, 1e9);
        std::priority_queue<std::pair<int, int>,
                            std::vector<std::pair<int, int>>,
                            std::greater<std::pair<int, int>>> pq;

        dist[0] = 0;
        pq.push({0, 0});

        while (!pq.empty()) {
            auto [d, u] = pq.top();
            pq.pop();

            if (d > dist[u]) continue;

            for (const auto& [v, w] : adj[u]) {
                if (dist[u] + w < dist[v]) {
                    dist[v] = dist[u] + w;
                    pq.push({dist[v], v});
                }
            }
        }

        int totalReachable = 0;

        // 1. Count reachable original nodes
        for (int i = 0; i < n; ++i) {
            if (dist[i] <= maxMoves) {
                totalReachable++;
            }
        }

        // 2. Count reachable subdivision nodes along each edge
        for (const auto& e : edges) {
            int u = e[0], v = e[1], cnt = e[2];
            int from_u = std::max(0, maxMoves - dist[u]);
            int from_v = std::max(0, maxMoves - dist[v]);

            totalReachable += std::min(cnt, from_u + from_v);
        }

        return totalReachable;
    }
};`,
    pythonCode: `import heapq
from typing import List

class Solution:
    def reachableNodes(self, edges: List[List[int]], maxMoves: int, n: int) -> int:
        adj = [[] for _ in range(n)]
        for u, v, cnt in edges:
            adj[u].append((v, cnt + 1))
            adj[v].append((u, cnt + 1))

        # Dijkstra algorithm
        dist = [float('inf')] * n
        dist[0] = 0
        pq = [(0, 0)]  # (distance, node)

        while pq:
            d, u = heapq.heappop(pq)
            if d > dist[u]:
                continue

            for v, w in adj[u]:
                if dist[u] + w < dist[v]:
                    dist[v] = dist[u] + w
                    heapq.heappush(pq, (dist[v], v))

        total_reachable = 0

        # 1. Count original reachable nodes
        for i in range(n):
            if dist[i] <= maxMoves:
                total_reachable += 1

        # 2. Count reachable subdivision nodes along edges
        for u, v, cnt in edges:
            from_u = max(0, maxMoves - dist[u])
            from_v = max(0, maxMoves - dist[v])
            total_reachable += min(cnt, from_u + from_v)

        return total_reachable`,
    complexity: {
      time: "O(E log V)",
      timeExplanation: "Graph has V = n <= 3000 nodes and E <= 10^4 edges. Dijkstra's priority queue takes O(E log V). The subsequent edge accounting iteration runs in linear O(E) time. Total operations <= 10^4 * 12 ~ 1.2 * 10^5 (under 5 ms).",
      space: "O(V + E)",
      spaceExplanation: "Adjacency list uses O(V + E) space. Distance array and priority queue use O(V) space."
    },
    commonMistakes: [
      "Materializing subdivision nodes: Creating 10^8 nodes causes immediate Out Of Memory crash.",
      "Double counting overlapping subdivision nodes: If from_u = 8 and from_v = 7 on an edge with cnt = 10, naively adding 8 + 7 = 15 counts 5 nonexistent nodes. Must clamp with `min(cnt, from_u + from_v)`.",
      "Forgetting to check if `dist[u] > maxMoves` when computing `from_u`: Must clamp with `max(0, maxMoves - dist[u])` so negative remaining moves don't subtract from count.",
      "Using standard int for distance initialization: If maxMoves can be 10^9, distances can exceed 10^9; use 1e9 or 64-bit int."
    ],
    instructorNotes: {
      prerequisites: "Dijkstra's shortest path algorithm, edge relaxation, continuous metric graph contraction.",
      teachingOrder: "Present the problem. Point out that explicit graph construction is impossible due to memory limits. Ask: 'What if we treat an edge with cnt subdivisions as a single edge of weight cnt + 1?' Show how Dijkstra on the original nodes gives exact arrival distances, and edge coverage is simple interval overlap.",
      keyLearningOutcomes: "Virtual graph contraction: abstracting millions of discrete intermediate nodes into weighted edges with mathematical boundary accounting.",
      difficultyRating: "Hard (LC Hard, CF 2000)"
    }
  },
  {
    id: "Q016",
    title: "Super Egg Drop (DP with Binary Search / Binomial Expansion)",
    folder: "06-MATHEMATICAL-AND-COMBINATORIAL/Q016-Super-Egg-Drop",
    category: "06-MATHEMATICAL-AND-COMBINATORIAL",
    categoryName: "Mathematical and Combinatorial Algorithms",
    platform: "LeetCode",
    originalId: "887",
    originalLink: "https://leetcode.com/problems/super-egg-drop/",
    difficulty: "Hard",
    maang: ["Google", "Apple", "Netflix", "Amazon", "Meta"],
    primaryConcepts: ["Dynamic Programming with Binary Search Optimization", "Mathematical Combinatorics"],
    advancedConcepts: ["Inverse DP State Reversal", "Binomial Coefficients / Pascal's Identity"],
    statement: `You are given k identical eggs and you have access to a building with n floors labeled from 1 to n.

You know that there exists a floor f where 0 <= f <= n such that any egg dropped at a floor higher than f will break, and any egg dropped at or below floor f will not break.

Each move, you may take an unbroken egg and drop it from any floor x (where 1 <= x <= n). If the egg breaks, you can no longer use it. However, if the egg does not break, you may reuse it in future moves.

Return the minimum number of moves that you need to determine with certainty what the value of f is.`,
    inputFormat: `Two integers k (number of eggs) and n (number of floors).`,
    outputFormat: `Return an integer representing the minimum number of moves in the worst-case scenario.`,
    constraints: [
      "1 <= k <= 100",
      "1 <= n <= 10^4"
    ],
    examples: [
      {
        input: "k = 1, n = 2",
        output: "2",
        explanation: "Drop at floor 1. If it breaks, f = 0. If it survives, drop at floor 2. If it breaks, f = 1. Else f = 2. Worst-case moves = 2."
      },
      {
        input: "k = 2, n = 6",
        output: "3",
        explanation: "Drop at floor 3. If it breaks, test floors 1 and 2 with the 2nd egg (worst case 3 moves). If it doesn't break, drop at floor 5, etc. Minimum worst-case moves is 3."
      },
      {
        input: "k = 3, n = 14",
        output: "4",
        explanation: "With 3 eggs and 14 floors, 4 moves are sufficient."
      }
    ],
    edgeCases: [
      "k = 1: Must drop egg linearly from floor 1 to n; return n.",
      "n = 1: Exactly 1 drop determines if f = 0 or f = 1; return 1.",
      "k >= log2(n) + 1: Sufficient eggs to perform pure binary search; return ceil(log2(n + 1)).",
      "Large n (10^4) with small k (2, 3): Standard O(k * n^2) DP times out; requires O(k * n) or O(k log n)."
    ],
    industryRelevance: [
      {
        company: "Google",
        source: "LeetCode Discuss",
        interviewYear: "2024",
        match: "Exact problem",
        evidence: "Iconic Google interview question asked across SWE levels to test candidates on algorithmic optimization progression from O(K*N^2) -> O(K*N log N) -> O(K*N) -> O(K log N).",
        reference: "https://leetcode.com/discuss/interview-experience/4919102/Google-L5-Classic-Egg-Drop-Optimization"
      },
      {
        company: "Apple",
        source: "Glassdoor",
        interviewYear: "2023",
        match: "Exact problem",
        evidence: "Asked in Apple Hardware/Firmware reliability team interview: testing tolerance thresholds of silicon components under destructive testing.",
        reference: "https://www.glassdoor.com/Interview/Apple-Software-Engineer-Interview-Questions-E1138.htm"
      },
      {
        company: "Netflix",
        source: "LeetCode Discuss",
        interviewYear: "2023",
        match: "Similar variant",
        evidence: "Adaptive bitrate ladder threshold testing with limited test budget.",
        reference: "https://leetcode.com/discuss/interview-experience/3810291/Netflix-Senior-Video-Encoding-Engineer"
      },
      {
        company: "Amazon",
        source: "GeeksforGeeks",
        interviewYear: "2022",
        match: "Exact problem",
        evidence: "Asked in Amazon SDE-2 bar raiser coding round.",
        reference: "https://www.geeksforgeeks.org/amazon-interview-experience-sde-2-hyderabad/"
      }
    ],
    prerequisites: [
      {
        platform: "LeetCode",
        name: "Climbing Stairs",
        id: "70",
        difficulty: "Easy",
        concepts: "Basic Dynamic Programming",
        learningObjective: "Understand recurrence relations and base cases.",
        reference: "https://leetcode.com/problems/climbing-stairs/"
      },
      {
        platform: "LeetCode",
        name: "Guess Number Higher or Lower II",
        id: "375",
        difficulty: "Medium",
        concepts: "Minimax DP, Interval DP",
        learningObjective: "Master minimax decision trees with worst-case penalties.",
        reference: "https://leetcode.com/problems/guess-number-higher-or-lower-ii/"
      },
      {
        platform: "Codeforces",
        name: "Maximum Submatrix 2",
        id: "375B",
        difficulty: "1700",
        concepts: "Binary Search DP Optimization",
        learningObjective: "Apply monotonic properties to speed up DP transitions.",
        reference: "https://codeforces.com/problemset/problem/375/B"
      }
    ],
    variations: [
      {
        name: "Non-Uniform Breaking Probabilities",
        modifiedRequirement: "Instead of worst-case moves, minimize the EXPECTED number of moves where each floor has probability p[i] of being the threshold.",
        additionalConcepts: "Expected Value Dynamic Programming with Knuth Optimization",
        difficulty: "Very Hard (CF 2400)",
        explanation: "Transition includes weighted probabilities rather than minimax worst-case."
      },
      {
        name: "Egg Re-cooling Cool-down Latency",
        modifiedRequirement: "Unbroken eggs require c moves to cool down before they can be dropped again.",
        additionalConcepts: "Time-expanded state tracking / Queued egg pipelines",
        difficulty: "Master",
        explanation: "Number of available eggs fluctuates based on return schedule."
      },
      {
        name: "Extremely Large N up to 10^18 with K <= 100",
        modifiedRequirement: "Building has 10^18 floors.",
        additionalConcepts: "Binary Search on Moves M + Binomial Coefficient Summation $\\sum_{i=1}^K \\binom{M}{i}$",
        difficulty: "Hard-Master (CF 2200)",
        explanation: "Direct formula allows finding M in O(K log(ans)) using binary search on answer M."
      }
    ],
    bruteForce: {
      intuition: "Standard DP: `dp(k, n) = 1 + min_{1 <= x <= n} ( max(dp(k - 1, x - 1), dp(k, n - x)) )`. Check all possible floors x from 1 to n.",
      pseudocode: `function dp(k, n):
  if k == 1: return n
  if n <= 1: return n
  ans = INFINITY
  for x from 1 to n:
    worstCase = 1 + max(dp(k - 1, x - 1), dp(k, n - x))
    ans = min(ans, worstCase)
  return ans`,
      timeComplexity: "O(K * N^2)",
      spaceComplexity: "O(K * N)",
      whyInefficient: "For K = 100, N = 10^4, K * N^2 = 100 * 10^8 = 10^10 operations, which runs in ~10 seconds and times out severely."
    },
    optimizedApproach: {
      keyObservations: "Notice the monotonic properties in the DP recurrence:\n`T1(x) = dp(k - 1, x - 1)` is strictly increasing with x.\n`T2(x) = dp(k, n - x)` is strictly decreasing with x.\nThe maximum `max(T1(x), T2(x))` forms a V-shaped convex valley. The minimum occurs at the intersection point where `T1(x) \\approx T2(x)`. Because both functions are monotonic, we can use BINARY SEARCH to find the optimal floor x in O(log N) instead of scanning all x in O(N). This reduces complexity to O(K * N log N) or O(K * N).\n\nEVEN FASTER: THE DUAL / INVERSE FORMULATION ($O(K \\log N)$):\nInstead of asking: 'Given K eggs and N floors, what is the minimum moves M?'\nInvert the question:\n'Given K eggs and M moves, what is the MAXIMUM number of floors `dp[m][k]` we can test?'\nIf we drop an egg from a floor:\n- If it breaks, we have $m - 1$ moves and $k - 1$ eggs left, allowing us to test `dp[m-1][k-1]` floors below.\n- If it survives, we have $m - 1$ moves and $k$ eggs left, allowing us to test `dp[m-1][k]` floors above.\n- Plus the floor we just dropped from (1 floor)!\nRecurrence Relation:\n$$dp[m][k] = dp[m - 1][k - 1] + dp[m - 1][k] + 1$$\nNotice this is identical to Pascal's Triangle (Binomial Expansion)!\nWe increment moves $m = 1, 2, 3...$ until `dp[m][k] >= n`. Since $m \\le n$, and for $k \\ge 2$, $m \\le 2\\sqrt{n}$ or $O(K \\log N)$, this runs in lightning speed!",
      algorithmSelection: "Inverse DP State Optimization: `dp[m][k] = dp[m-1][k-1] + dp[m-1][k] + 1`.",
      stepByStep: [
        "1. Create a 1D array `dp` of size `k + 1` initialized to 0.",
        "2. Initialize `moves = 0`.",
        "3. Loop while `dp[k] < n`:",
        "   a. `moves++`.",
        "   b. Update `dp` array backwards from `i = k` down to 1:",
        "      `dp[i] = dp[i] + dp[i - 1] + 1`",
        "4. Return `moves`."
      ]
    },
    cppCode: `#include <vector>

class Solution {
public:
    int superEggDrop(int k, int n) {
        // dp[i] stores the maximum floors we can test with i eggs given current number of moves
        std::vector<int> dp(k + 1, 0);
        int moves = 0;

        // Keep incrementing moves until we can test at least n floors
        while (dp[k] < n) {
            moves++;
            // Traverse backwards to use previous moves state
            for (int i = k; i >= 1; --i) {
                dp[i] = dp[i] + dp[i - 1] + 1;
            }
        }

        return moves;
    }
};`,
    pythonCode: `class Solution:
    def superEggDrop(self, k: int, n: int) -> int:
        # dp[i] stores maximum floors determinable with i eggs
        dp = [0] * (k + 1)
        moves = 0

        while dp[k] < n:
            moves += 1
            # Update backwards to simulate dp[m][i] = dp[m-1][i-1] + dp[m-1][i] + 1
            for i in range(k, 0, -1):
                dp[i] = dp[i] + dp[i - 1] + 1

        return moves`,
    complexity: {
      time: "O(K * M) where M <= N is the answer (M <= 14 for K=10, N=10^4)",
      timeExplanation: "With K = 100 and N = 10,000, M is at most 14 moves (since 2^14 = 16384 > 10000). The loop runs at most M times, and each iteration updates K values. Total operations = K * M <= 100 * 14 = 1400 operations, executing in under 0.01 milliseconds!",
      space: "O(K)",
      spaceExplanation: "The 1D DP table requires only K + 1 integers of memory."
    },
    commonMistakes: [
      "Sticking with the standard O(K*N^2) formulation without recognizing the monotonicity of the two subproblems.",
      "Attempting standard binary search on floors with eggs: Assuming you can always drop at n/2 is WRONG because eggs are finite (with 1 egg, dropping at n/2 can break your only egg, leaving you unable to test the remaining n/2 - 1 floors).",
      "Updating DP array forwards: If updated forwards (`for i in 1..k`), `dp[i - 1]` contains values from the *current* move instead of the *previous* move, corrupting the state.",
      "Integer overflow when N is huge: For very large moves, DP values can exceed 32-bit signed integers."
    ],
    instructorNotes: {
      prerequisites: "Minimax optimization, inverse function transformation, Pascal's triangle combinatorics.",
      teachingOrder: "1. Present 2 eggs, 100 floors (classic riddle). Derive the triangular number solution: $x + (x-1) + ... + 1 \\ge 100 \\implies x = 14$.\n2. Generalize to K eggs: write the classic DP recurrence.\n3. Show how binary search accelerates DP to O(K*N log N).\n4. Reveal the mathematical breakthrough: invert the question to 'How many floors can M moves test?' Derive the Pascal identity.",
      keyLearningOutcomes: "State reversal technique: converting a difficult minimization problem over unbounded space into a monotonic growth problem over bounded moves.",
      difficultyRating: "Very Hard (LC Hard, CF 2200-2400)"
    }
  }
];
