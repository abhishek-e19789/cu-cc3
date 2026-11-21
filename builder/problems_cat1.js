// Category 1: Graph Algorithms (Q001, Q002, Q003)
export const cat1Problems = [
  {
    id: "Q001",
    title: "Trapping Rain Water II (3D Elevation Basin)",
    folder: "01-GRAPH-ALGORITHMS/Q001-Trapping-Rain-Water-II",
    category: "01-GRAPH-ALGORITHMS",
    categoryName: "Graph Algorithms",
    platform: "LeetCode",
    originalId: "407",
    originalLink: "https://leetcode.com/problems/trapping-rain-water-ii/",
    difficulty: "Hard",
    maang: ["Google", "Meta", "Amazon"],
    primaryConcepts: ["Priority Queue / Min-Heap", "Multi-Source BFS on Grid"],
    advancedConcepts: ["Dijkstra-style Boundary Contraction", "Topological Spillover Invariant"],
    statement: `Given an m x n integer matrix 'heightMap' representing the height of each unit cell in a 2D elevation map, compute the total volume of water it can trap after raining.

Water can flow in four directions (north, south, east, west) to any adjacent cell with an equal or lower height. Water that reaches the border of the grid spills over and drains out completely. The elevation map is assumed to be surrounded by an infinite basin of height zero.`,
    inputFormat: `A 2D integer array heightMap of dimensions m x n where heightMap[i][j] denotes the non-negative elevation of cell (i, j).`,
    outputFormat: `Return an integer representing the maximum total volume of trapped water.`,
    constraints: [
      "m == heightMap.length",
      "n == heightMap[i].length",
      "1 <= m, n <= 200",
      "0 <= heightMap[i][j] <= 2 * 10^4"
    ],
    examples: [
      {
        input: "heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]",
        output: "4",
        explanation: "After raining, water fills the inner basin at (1,2) of height 1 up to level 3 (2 units), and (1,1) of height 2 up to level 3 (1 unit), plus (1,4) of height 2 up to level 3 (1 unit). Total trapped water = 4."
      },
      {
        input: "heightMap = [[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]",
        output: "10",
        explanation: "The border has height 3 forming a bowl. The inner ring has height 2 and center has height 1. Center traps 3 - 1 = 2 units, inner ring of 8 cells traps (3 - 2) * 8 = 8 units. Total = 10."
      }
    ],
    edgeCases: [
      "Grid dimensions m < 3 or n < 3: No interior cells exist, so trapped water must be 0.",
      "Strictly non-increasing or flat terrain: No water can be trapped.",
      "Concentric multi-tier terraced walls: Water trapped at multiple distinct boundary levels.",
      "Large height disparity: Heights up to 20,000 where overflow must not cause integer overflow (total trapped volume fits in 32-bit signed int under 200x200x20000)."
    ],
    industryRelevance: [
      {
        company: "Google",
        source: "LeetCode Discuss",
        interviewYear: "2023",
        match: "Exact problem",
        evidence: "Candidate was asked 3D rain water trapping in Google L5 systems interview focusing on heap-driven boundary contraction.",
        reference: "https://leetcode.com/discuss/interview-experience/3142751/Google-L5-Senior-SWE-Interview"
      },
      {
        company: "Meta",
        source: "Glassdoor",
        interviewYear: "2022",
        match: "Exact problem",
        evidence: "Reported as final coding round problem testing knowledge beyond 1D two-pointer trapping.",
        reference: "https://www.glassdoor.com/Interview/Meta-Software-Engineer-Interview-Questions-E40772.htm"
      },
      {
        company: "Amazon",
        source: "LeetCode Discuss",
        interviewYear: "2024",
        match: "Similar variant",
        evidence: "Variation asking for dynamic lake formation with variable fluid viscosity and boundary outlets.",
        reference: "https://leetcode.com/discuss/interview-experience/4688192/Amazon-SDE2-Onsite-Coding-Round"
      },
      {
        company: "Apple",
        source: "Reddit (r/cscareerquestions)",
        interviewYear: "2023",
        match: "Same pattern",
        evidence: "Candidate described Dijkstra-based surface elevation tracking for LiDAR spatial maps.",
        reference: "https://www.reddit.com/r/cscareerquestions/comments/17c8k2x/apple_swe_interview_experience_october_2023/"
      }
    ],
    prerequisites: [
      {
        platform: "LeetCode",
        name: "Trapping Rain Water (1D)",
        id: "42",
        difficulty: "Hard",
        concepts: "Two Pointers, Monotonic Stack",
        learningObjective: "Master the 1D spillover principle where water level is constrained by min(maxLeft, maxRight).",
        reference: "https://leetcode.com/problems/trapping-rain-water/"
      },
      {
        platform: "LeetCode",
        name: "Network Delay Time",
        id: "743",
        difficulty: "Medium",
        concepts: "Dijkstra's Algorithm, Priority Queue",
        learningObjective: "Understand min-heap Dijkstra wavefront propagation from sources to unvisited nodes.",
        reference: "https://leetcode.com/problems/network-delay-time/"
      },
      {
        platform: "Codeforces",
        name: "Dijkstra?",
        id: "20C",
        difficulty: "1600",
        concepts: "Graph Shortest Path, Priority Queue",
        learningObjective: "Gain speed and rigor in implementing min-heap priority queue graph traversal.",
        reference: "https://codeforces.com/problemset/problem/20/C"
      },
      {
        platform: "Codeforces",
        name: "Maze",
        id: "377A",
        difficulty: "1600",
        concepts: "DFS / BFS on Grid",
        learningObjective: "Handle connected components and boundary traversals on 2D matrices cleanly.",
        reference: "https://codeforces.com/problemset/problem/377/A"
      }
    ],
    variations: [
      {
        name: "Dynamic Terrain Elevation Updates",
        modifiedRequirement: "After computing initial trapped water, process Q updates where heightMap[r][c] increases. Output new trapped water.",
        additionalConcepts: "Dynamic Segment Tree / DSU with potential updates",
        difficulty: "Very Hard (Codeforces 2400+)",
        explanation: "Static Dijkstra re-computation takes O(Q * MN log(MN)), which is too slow. Requires tracking watershed basins or incremental boundary recalculation."
      },
      {
        name: "Multiple Outlets with Non-Zero External Basins",
        modifiedRequirement: "Certain perimeter cells are blocked by infinite walls, leaving only k designated outlet points on the boundary.",
        additionalConcepts: "Multi-Source Dijkstra initialized strictly from valid outlets",
        difficulty: "Hard",
        explanation: "Rather than pushing all perimeter cells into the priority queue, only the designated outlets initialize the wavefront."
      },
      {
        name: "Directional Flow with Gravity Slopes (Hexagonal Grid)",
        modifiedRequirement: "The elevation map is a triangular/hexagonal grid with 6 neighbor adjacencies instead of 4.",
        additionalConcepts: "Hexagonal coordinate mapping + Dijkstra heap",
        difficulty: "Hard",
        explanation: "Neighbors change from 4-directional offsets to 6-directional axial offsets ((+1,0), (-1,0), (0,+1), (0,-1), (+1,-1), (-1,+1))."
      }
    ],
    bruteForce: {
      intuition: "For every interior cell (r, c), simulate water flow by trying to find the minimum boundary height of all paths leading to the perimeter. The trapped water at (r, c) is max(0, min_path_max_height - heightMap[r][c]).",
      pseudocode: `function bruteForce(heightMap):
  totalWater = 0
  for r from 1 to m-2:
    for c from 1 to n-2:
      minBoundary = findMinMaxPathToPerimeter(r, c)
      if minBoundary > heightMap[r][c]:
        totalWater += minBoundary - heightMap[r][c]
  return totalWater`,
      timeComplexity: "O((M * N)^2) or O(M * N * (M * N))",
      spaceComplexity: "O(M * N) for BFS/DFS path visited tracking",
      whyInefficient: "Finding minimax paths independently for every interior cell re-computes overlapping pathways millions of times, which times out severely for 200x200 grids."
    },
    optimizedApproach: {
      keyObservations: "In 1D, trapped water at index i is governed by min(max_left, max_right). In 2D, water spills out through the lowest leak on the surrounding perimeter. Therefore, if we maintain the bounding perimeter in a min-heap, the cell with the smallest height is the bottleneck for inward expansion. As we pop the lowest boundary cell, its unvisited neighbors will have an effective water level equal to max(neighbor_height, boundary_height). Water trapped = max(0, effective_water_level - neighbor_height). We then add the neighbor to the heap with its effective water level.",
      algorithmSelection: "Min-Heap Priority Queue + Multi-Source Dijkstra Boundary Contraction.",
      stepByStep: [
        "1. Check if dimensions m < 3 or n < 3; if so, return 0 immediately.",
        "2. Initialize a min-heap storing tuples (height, r, c).",
        "3. Mark all perimeter cells (top row, bottom row, leftmost col, rightmost col) as visited and push them into the min-heap.",
        "4. Initialize totalWater = 0.",
        "5. While the min-heap is not empty, pop the minimum element (h, r, c).",
        "6. For each of the 4 cardinal neighbors (nr, nc) of (r, c):",
        "   a. If (nr, nc) is within bounds and unvisited:",
        "      i. Mark (nr, nc) as visited.",
        "      ii. If heightMap[nr][nc] < h, add (h - heightMap[nr][nc]) to totalWater.",
        "      iii. Push (max(h, heightMap[nr][nc]), nr, nc) into the min-heap.",
        "7. Return totalWater."
      ]
    },
    cppCode: `#include <vector>
#include <queue>
#include <tuple>
#include <algorithm>

class Solution {
public:
    int trapRainWater(std::vector<std::vector<int>>& heightMap) {
        int m = heightMap.size();
        if (m == 0) return 0;
        int n = heightMap[0].size();
        if (m < 3 || n < 3) return 0;

        // Min-heap storing {height, r, c}
        std::priority_queue<std::tuple<int, int, int>,
                            std::vector<std::tuple<int, int, int>>,
                            std::greater<std::tuple<int, int, int>>> pq;

        std::vector<std::vector<bool>> visited(m, std::vector<bool>(n, false));

        // Push perimeter cells into priority queue
        for (int i = 0; i < m; ++i) {
            pq.push({heightMap[i][0], i, 0});
            pq.push({heightMap[i][n - 1], i, n - 1});
            visited[i][0] = true;
            visited[i][n - 1] = true;
        }
        for (int j = 1; j < n - 1; ++j) {
            pq.push({heightMap[0][j], 0, j});
            pq.push({heightMap[m - 1][j], m - 1, j});
            visited[0][j] = true;
            visited[m - 1][j] = true;
        }

        int totalWater = 0;
        int dirs[4][2] = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};

        while (!pq.empty()) {
            auto [h, r, c] = pq.top();
            pq.pop();

            for (auto& dir : dirs) {
                int nr = r + dir[0];
                int nc = c + dir[1];

                if (nr >= 0 && nr < m && nc >= 0 && nc < n && !visited[nr][nc]) {
                    visited[nr][nc] = true;
                    if (heightMap[nr][nc] < h) {
                        totalWater += h - heightMap[nr][nc];
                    }
                    // The effective spillover height for the neighbor is max(h, heightMap[nr][nc])
                    pq.push({std::max(h, heightMap[nr][nc]), nr, nc});
                }
            }
        }

        return totalWater;
    }
};`,
    pythonCode: `import heapq
from typing import List

class Solution:
    def trapRainWater(self, heightMap: List[List[int]]) -> int:
        if not heightMap or not heightMap[0]:
            return 0
        
        m, n = len(heightMap), len(heightMap[0])
        if m < 3 or n < 3:
            return 0
        
        visited = [[False] * n for _ in range(m)]
        pq = []  # Stores (effective_height, r, c)

        # Enqueue all perimeter cells
        for i in range(m):
            heapq.heappush(pq, (heightMap[i][0], i, 0))
            heapq.heappush(pq, (heightMap[i][n - 1], i, n - 1))
            visited[i][0] = True
            visited[i][n - 1] = True
            
        for j in range(1, n - 1):
            heapq.heappush(pq, (heightMap[0][j], 0, j))
            heapq.heappush(pq, (heightMap[m - 1][j], m - 1, j))
            visited[0][j] = True
            visited[m - 1][j] = True

        total_water = 0
        directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

        while pq:
            h, r, c = heapq.heappop(pq)

            for dr, dc in directions:
                nr, nc = r + dr, c + dc
                if 0 <= nr < m and 0 <= nc < n and not visited[nr][nc]:
                    visited[nr][nc] = True
                    if heightMap[nr][nc] < h:
                        total_water += h - heightMap[nr][nc]
                    # The neighbor acts as a barrier at max(h, heightMap[nr][nc])
                    heapq.heappush(pq, (max(h, heightMap[nr][nc]), nr, nc))

        return total_water`,
    complexity: {
      time: "O(M * N log(M * N))",
      timeExplanation: "Every cell is inserted into and extracted from the priority queue at most once. For an M x N grid, there are M * N states, and each heap push/pop takes O(log(M * N)).",
      space: "O(M * N)",
      spaceExplanation: "The visited matrix takes O(M * N) space and the min-heap holds at most O(M * N) cells concurrently."
    },
    commonMistakes: [
      "Assuming a 1D two-pointer approach can be applied independently to rows and columns (e.g. min(rowWater, colWater)). This is fundamentally flawed because 2D water spills diagonally and along serpentine paths.",
      "Pushing raw neighbor heights into the heap instead of max(current_h, neighbor_height). If a lower neighbor is flooded to level h, its boundary wall for further interior cells is h, not its raw floor height.",
      "Forgetting to check m < 3 or n < 3 boundary conditions resulting in out-of-bounds or redundant computations.",
      "Re-visiting already processed nodes or modifying heightMap directly causing negative water accumulations."
    ],
    instructorNotes: {
      prerequisites: "1D Trapping Rain Water (LC 42), Dijkstra's shortest path algorithm, Priority Queues.",
      teachingOrder: "Start with 1D water trapping (two-pointer concept), then ask students how water behaves in 3D. Show counterexamples where row/col minimum fails. Introduce the 'spill over lowest wall' invariant and transition into Dijkstra.",
      keyLearningOutcomes: "Mastering heap-driven wavefront expansion on multi-dimensional grids, invariant preservation during boundary contraction.",
      difficultyRating: "High (LC Hard, equivalent to Codeforces 1900-2000)"
    }
  },
  {
    id: "Q002",
    title: "Critical Connections in a Network (Bridge Finding)",
    folder: "01-GRAPH-ALGORITHMS/Q002-Critical-Connections-in-a-Network",
    category: "01-GRAPH-ALGORITHMS",
    categoryName: "Graph Algorithms",
    platform: "LeetCode",
    originalId: "1192",
    originalLink: "https://leetcode.com/problems/critical-connections-in-a-network/",
    difficulty: "Hard",
    maang: ["Amazon", "Apple", "Meta", "Google"],
    primaryConcepts: ["Tarjan's Bridge-Finding Algorithm", "DFS Spanning Tree"],
    advancedConcepts: ["Low-link Values", "Articulation Points / 2-Edge Connected Components"],
    statement: `There are n servers numbered from 0 to n - 1 connected by undirected server-to-server connections forming a network where connections[i] = [ai, bi] represents a bidirectional connection between servers ai and bi. Any server can reach any other server directly or indirectly through the network.

A critical connection is a connection that, if removed, will make some servers unable to reach some other server (i.e. disconnect the network).

Return all critical connections in the network in any order.`,
    inputFormat: `An integer n representing the number of servers, and a 2D integer array connections where connections[i] = [ai, bi].`,
    outputFormat: `Return a 2D array of critical connections where each element is [ai, bi].`,
    constraints: [
      "2 <= n <= 10^5",
      "n - 1 <= connections.length <= 10^5",
      "0 <= ai, bi <= n - 1",
      "ai != bi",
      "There are no repeated connections.",
      "The network is connected."
    ],
    examples: [
      {
        input: "n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]",
        output: "[[1,3]]",
        explanation: "The connection [1,3] is critical because removing it isolates node 3. The cycle (0-1-2-0) ensures no edge within the cycle is critical."
      },
      {
        input: "n = 2, connections = [[0,1]]",
        output: "[[0,1]]",
        explanation: "Removing the only edge [0,1] disconnects node 0 and node 1."
      }
    ],
    edgeCases: [
      "Linear tree graph (N nodes, N-1 edges in a line): All N-1 edges are critical bridges.",
      "Single simple cycle of N nodes: Exactly 0 bridges exist.",
      "Two large cycles connected by a single edge: Only that connecting edge is critical.",
      "Star graph with central hub: Every leaf edge is critical."
    ],
    industryRelevance: [
      {
        company: "Amazon",
        source: "LeetCode Discuss",
        interviewYear: "2024",
        match: "Exact problem",
        evidence: "Reported in AWS infrastructure team interviews: 'Find single points of network failure in a data center graph'.",
        reference: "https://leetcode.com/discuss/interview-experience/4921045/Amazon-AWS-Senior-SDE-Interview"
      },
      {
        company: "Apple",
        source: "Glassdoor",
        interviewYear: "2023",
        match: "Exact problem",
        evidence: "Asked in CoreOS team interview assessing deep graph theory and DFS low-link traversal.",
        reference: "https://www.glassdoor.com/Interview/Apple-Software-Engineer-Interview-Questions-E1138.htm"
      },
      {
        company: "Meta",
        source: "LeetCode Discuss",
        interviewYear: "2023",
        match: "Similar variant",
        evidence: "Asked as 'Minimum edges to add to make network bridge-free' (biconnected component condensation).",
        reference: "https://leetcode.com/discuss/interview-experience/3811902/Meta-E5-Onsite-Coding"
      },
      {
        company: "Google",
        source: "GeeksforGeeks",
        interviewYear: "2022",
        match: "Exact problem",
        evidence: "Graph connectivity round candidate was asked to implement linear-time bridge detection without recursion limit overflow.",
        reference: "https://www.geeksforgeeks.org/google-interview-experience-for-software-engineer-off-campus/"
      }
    ],
    prerequisites: [
      {
        platform: "LeetCode",
        name: "Number of Connected Components in an Undirected Graph",
        id: "323",
        difficulty: "Medium",
        concepts: "DFS, BFS, Disjoint Set Union",
        learningObjective: "Understand basic graph connectivity and cycle identification.",
        reference: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/"
      },
      {
        platform: "Codeforces",
        name: "Bertown roads",
        id: "118A / 118E",
        difficulty: "1900",
        concepts: "Tarjan's Bridges, DFS Tree, Graph Orientation",
        learningObjective: "Master classifying edges into Tree Edges vs Back Edges and computing low-link values.",
        reference: "https://codeforces.com/problemset/problem/118/E"
      },
      {
        platform: "Codeforces",
        name: "Reform",
        id: "652E",
        difficulty: "2100",
        concepts: "2-Edge Connected Components, Bridge Block Tree",
        learningObjective: "Compress 2-edge connected components and build bridge-block trees.",
        reference: "https://codeforces.com/problemset/problem/652/E"
      }
    ],
    variations: [
      {
        name: "Bridge-Block Tree Condensation",
        modifiedRequirement: "Condense all 2-edge connected components into single super-nodes and return the diameter of the resulting tree.",
        additionalConcepts: "DSU + Tree DP on Bridge Tree",
        difficulty: "Hard (CF 2100)",
        explanation: "Once bridges are found, contracting 2-edge connected components forms a tree. Finding the diameter gives the maximum bridge chain."
      },
      {
        name: "Online Bridge Detection",
        modifiedRequirement: "Process Q edge additions dynamically. After each edge addition, report the current number of bridges remaining in the network.",
        additionalConcepts: "2-Biconnected Components DSU + 2-Level DSU (Dinitz / Westbrook-Tarjan)",
        difficulty: "Master (CF 2500+)",
        explanation: "Adding an edge between u and v creates a cycle that eliminates all bridges along the path between u and v in the bridge tree."
      },
      {
        name: "Critical Nodes (Articulation Points)",
        modifiedRequirement: "Instead of connections (edges), find servers (nodes) whose removal disconnects the network.",
        additionalConcepts: "Tarjan's Articulation Point Algorithm (low[v] >= tin[u])",
        difficulty: "Hard",
        explanation: "Requires distinguishing root node condition (>=2 children) from non-root condition (low[child] >= tin[u])."
      }
    ],
    bruteForce: {
      intuition: "For every edge e in connections, temporarily remove e and run BFS/DFS to check if the graph remains connected. If disconnected, e is critical.",
      pseudocode: `function bruteForce(n, connections):
  critical = []
  for e in connections:
    remove e from graph
    if countReachableNodes(0) < n:
      critical.append(e)
    restore e
  return critical`,
      timeComplexity: "O(E * (V + E))",
      spaceComplexity: "O(V + E) for adjacency list and visited set",
      whyInefficient: "For V, E = 10^5, E * (V + E) is approximately 10^10 operations, causing Time Limit Exceeded (runs in minutes, budget is ~1 sec)."
    },
    optimizedApproach: {
      keyObservations: "In a DFS tree of an undirected graph, all non-tree edges are back edges (connecting a node to an ancestor). An edge (u, v) is a bridge if and only if no back edge from the subtree of v reaches u or an ancestor of u. By maintaining discovery time `tin[u]` and the minimum discovery time reachable via subtree and at most one back edge `low[u]`, edge (u, v) is a bridge iff `low[v] > tin[u]`.",
      algorithmSelection: "Tarjan's Bridge-Finding Algorithm via single DFS traversal.",
      stepByStep: [
        "1. Construct adjacency list representation of the graph.",
        "2. Maintain global timer `timer = 0`, `tin` array initialized to -1, and `low` array.",
        "3. Define DFS(u, parent):",
        "   a. `tin[u] = low[u] = ++timer`",
        "   b. For each neighbor v of u:",
        "      i. If v == parent, continue (do not re-traverse parent edge).",
        "      ii. If `tin[v] != -1` (v is visited, meaning (u, v) is a back-edge):",
        "          `low[u] = min(low[u], tin[v])`",
        "      iii. Else (v is unvisited, meaning (u, v) is a tree-edge):",
        "          Run DFS(v, u).",
        "          `low[u] = min(low[u], low[v])`",
        "          If `low[v] > tin[u]`, then edge (u, v) is a critical connection! Add [u, v] to result.",
        "4. Run DFS(0, -1) and return result."
      ]
    },
    cppCode: `#include <vector>
#include <algorithm>

class Solution {
private:
    int timer = 0;
    std::vector<std::vector<int>> adj;
    std::vector<int> tin, low;
    std::vector<std::vector<int>> bridges;

    void dfs(int u, int p) {
        tin[u] = low[u] = ++timer;
        for (int v : adj[u]) {
            if (v == p) continue;
            if (tin[v] != -1) {
                // Back-edge to ancestor
                low[u] = std::min(low[u], tin[v]);
            } else {
                // Forward tree-edge
                dfs(v, u);
                low[u] = std::min(low[u], low[v]);
                if (low[v] > tin[u]) {
                    bridges.push_back({u, v});
                }
            }
        }
    }

public:
    std::vector<std::vector<int>> criticalConnections(int n, std::vector<std::vector<int>>& connections) {
        adj.assign(n, std::vector<int>());
        for (const auto& edge : connections) {
            adj[edge[0]].push_back(edge[1]);
            adj[edge[1]].push_back(edge[0]);
        }

        tin.assign(n, -1);
        low.assign(n, -1);
        timer = 0;
        bridges.clear();

        dfs(0, -1);
        return bridges;
    }
};`,
    pythonCode: `import sys
from typing import List

# Increase recursion depth for deep graphs
sys.setrecursionlimit(200000)

class Solution:
    def criticalConnections(self, n: int, connections: List[List[int]]) -> List[List[int]]:
        adj = [[] for _ in range(n)]
        for u, v in connections:
            adj[u].append(v)
            adj[v].append(u)
            
        tin = [-1] * n
        low = [-1] * n
        timer = 0
        bridges = []

        def dfs(u: int, p: int):
            nonlocal timer
            timer += 1
            tin[u] = low[u] = timer

            for v in adj[u]:
                if v == p:
                    continue
                if tin[v] != -1:
                    # Back edge: update low[u] with discovery time of ancestor
                    low[u] = min(low[u], tin[v])
                else:
                    # Tree edge: recurse
                    dfs(v, u)
                    low[u] = min(low[u], low[v])
                    if low[v] > tin[u]:
                        bridges.append([u, v])

        dfs(0, -1)
        return bridges`,
    complexity: {
      time: "O(V + E)",
      timeExplanation: "Each vertex and edge is traversed a constant number of times during the single DFS pass. Adjacency list construction is O(V + E).",
      space: "O(V + E)",
      spaceExplanation: "Graph adjacency list requires O(V + E) memory. Recursion call stack and tin/low tracking arrays use O(V) auxiliary space."
    },
    commonMistakes: [
      "Using `low[u] = min(low[u], low[v])` for back-edges instead of `low[u] = min(low[u], tin[v])`. While in simple bridge finding this sometimes yields the same result, it violates the formal definition of low-link and leads to catastrophic bugs in biconnected component decomposition.",
      "Failing to skip the parent edge (`if (v == p) continue;`). Without this, the algorithm treats the undirected edge back to parent as a back edge, causing `low[u]` to always equal `tin[p]`, finding zero bridges.",
      "Python recursion limit overflow: N can be 10^5, which exceeds Python's default recursion depth of 1,000. Calling `sys.setrecursionlimit(200000)` is strictly necessary.",
      "Checking `low[v] >= tin[u]` instead of `low[v] > tin[u]`. Equality `>=` is the condition for Articulation Points, whereas strictly greater `>` is required for Bridges."
    ],
    instructorNotes: {
      prerequisites: "DFS tree structure, concept of back edges in undirected graphs, graph connectivity.",
      teachingOrder: "Present the naive O(E*(V+E)) edge-removal approach. Ask why cycles prevent bridges. Introduce the DFS spanning tree and explain why back edges 'shield' tree edges from being bridges. Formulate the low-link invariant.",
      keyLearningOutcomes: "Linear-time DFS classification of graph edges, low-link values, bridge vs articulation point differentiation.",
      difficultyRating: "High (LC Hard, CF 1900)"
    }
  },
  {
    id: "Q003",
    title: "Swim in Rising Water (Minimax Grid Path)",
    folder: "01-GRAPH-ALGORITHMS/Q003-Swim-in-Rising-Water",
    category: "01-GRAPH-ALGORITHMS",
    categoryName: "Graph Algorithms",
    platform: "LeetCode",
    originalId: "778",
    originalLink: "https://leetcode.com/problems/swim-in-rising-water/",
    difficulty: "Hard",
    maang: ["Google", "Meta", "Netflix", "Amazon"],
    primaryConcepts: ["Modified Dijkstra (Minimax Path)", "Binary Search on Answer with BFS"],
    advancedConcepts: ["Disjoint Set Union (Kruskal-style Grid Percolation)", "Parametric Search"],
    statement: `You are given an n x n integer matrix grid where each cell (i, j) has an elevation grid[i][j]. The values grid[i][j] are a permutation of the integers from 0 to n^2 - 1.

Rain starts falling at time t = 0. At time t, the depth of water everywhere is t. You can swim from a square to another 4-directionally adjacent square if and only if the elevation of both squares is at most t. You can swim infinite distances instantaneously.

Return the minimum time t such that you can reach the bottom-right square (n - 1, n - 1) starting from the top-left square (0, 0).`,
    inputFormat: `A 2D integer array grid of size n x n where elements are a permutation of 0 to n^2 - 1.`,
    outputFormat: `Return an integer representing the minimum time t to reach (n - 1, n - 1) from (0, 0).`,
    constraints: [
      "n == grid.length",
      "n == grid[i].length",
      "1 <= n <= 50",
      "grid[i][j] is a permutation of the integers from 0 to n^2 - 1."
    ],
    examples: [
      {
        input: "grid = [[0,2],[1,3]]",
        output: "3",
        explanation: "At time 0, you are at (0,0). You cannot go anywhere until time 1 (when grid[1][0]=1 is submerged). From (1,0), to reach (1,1) with elevation 3, you must wait until time 3. Hence, minimum time is 3."
      },
      {
        input: "grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]",
        output: "16",
        explanation: "The optimal path follows the spiral: (0,0) -> ... -> (0,4) -> (1,4) -> (2,4) -> ... reaching (4,4) at maximum elevation on path = 16."
      }
    ],
    edgeCases: [
      "1 x 1 Grid: Minimum time is simply grid[0][0].",
      "Monotonically increasing diagonal: Path is forced through highest peaks.",
      "Start or End cell has maximum value: Answer can never be less than max(grid[0][0], grid[n-1][n-1])."
    ],
    industryRelevance: [
      {
        company: "Google",
        source: "LeetCode Discuss",
        interviewYear: "2024",
        match: "Exact problem",
        evidence: "Asked in Google Mountain View L4 round, candidate tested on discussing 3 distinct optimal algorithmic approaches: Dijkstra, Binary Search + BFS, and DSU.",
        reference: "https://leetcode.com/discuss/interview-experience/4891120/Google-L4-Full-Loop-Feedback"
      },
      {
        company: "Meta",
        source: "Glassdoor",
        interviewYear: "2023",
        match: "Exact problem",
        evidence: "Candidate asked to optimize time complexity from O(N^2 log N) to nearly linear using Disjoint Set Union.",
        reference: "https://www.glassdoor.com/Interview/Meta-Software-Engineer-Interview-Questions-E40772.htm"
      },
      {
        company: "Netflix",
        source: "LeetCode Discuss",
        interviewYear: "2022",
        match: "Similar variant",
        evidence: "Framed as dynamic packet routing across high-latency mesh networks with minimax bottleneck latency.",
        reference: "https://leetcode.com/discuss/interview-experience/2198421/Netflix-Senior-Software-Engineer-Remote"
      },
      {
        company: "Amazon",
        source: "Reddit (r/cscareerquestions)",
        interviewYear: "2023",
        match: "Same pattern",
        evidence: "Delivery drone battery altitude threshold problem solving minimax path on DEM grid.",
        reference: "https://www.reddit.com/r/cscareerquestions/comments/16u1p2e/amazon_onsite_graph_minimax_dijkstra/"
      }
    ],
    prerequisites: [
      {
        platform: "LeetCode",
        name: "Path With Minimum Effort",
        id: "1631",
        difficulty: "Medium",
        concepts: "Dijkstra, Binary Search, DSU",
        learningObjective: "Understand minimax path relaxation where dist[v] = max(dist[u], weight(u,v)).",
        reference: "https://leetcode.com/problems/path-with-minimum-effort/"
      },
      {
        platform: "Codeforces",
        name: "Dynamic Shortest Path / Dijkstra",
        id: "59E",
        difficulty: "1900",
        concepts: "State space traversal, Dijkstra",
        learningObjective: "Expand state evaluation under modified relaxation criteria.",
        reference: "https://codeforces.com/problemset/problem/59/E"
      },
      {
        platform: "Codeforces",
        name: "Mocha and Diana",
        id: "1559D1",
        difficulty: "1400",
        concepts: "Disjoint Set Union (DSU)",
        learningObjective: "Apply DSU components to dynamic edge activations.",
        reference: "https://codeforces.com/problemset/problem/1559/D1"
      }
    ],
    variations: [
      {
        name: "Tide-Cycle Periodic Drainage",
        modifiedRequirement: "Water rises by 1 every daytime hour but drops by 1 every nighttime hour (periodic function).",
        additionalConcepts: "Time-expanded state graph / Modulo-time BFS",
        difficulty: "Hard (CF 2200)",
        explanation: "State must expand from (r, c) to (r, c, t % T) because waiting at a cell becomes advantageous."
      },
      {
        name: "Energy-Constrained Swimming",
        modifiedRequirement: "Every step takes 1 unit of oxygen; total steps cannot exceed K.",
        additionalConcepts: "0-1 BFS / 2D Dijkstra with state (r, c, steps_left)",
        difficulty: "Hard",
        explanation: "Cannot use standard DSU because shortest spatial path may not coincide with minimum elevation path."
      },
      {
        name: "Dynamic Landslides (Online Edge Removals)",
        modifiedRequirement: "Certain cells collapse dynamically and their elevations increase to infinity.",
        additionalConcepts: "Offline reverse DSU with time queries",
        difficulty: "Very Hard (CF 2400)",
        explanation: "Reversing queries from time Q down to 1 allows using standard DSU union operations instead of dynamic connectivity."
      }
    ],
    bruteForce: {
      intuition: "DFS explore all simple paths from (0,0) to (n-1, n-1). For each path, compute the maximum cell value encountered. Take the minimum over all paths.",
      pseudocode: `function bruteDFS(r, c, currentMax, visited):
  if r == n-1 and c == n-1:
    return currentMax
  minAns = INFINITY
  for neighbor in adj(r, c):
    if neighbor not in visited:
      visited.add(neighbor)
      minAns = min(minAns, bruteDFS(nr, nc, max(currentMax, grid[nr][nc]), visited))
      visited.remove(neighbor)
  return minAns`,
      timeComplexity: "O(4^(N^2))",
      spaceComplexity: "O(N^2) recursion stack",
      whyInefficient: "Explores all non-directed self-avoiding walks on an N x N grid, leading to combinatorial explosion for N > 5."
    },
    optimizedApproach: {
      keyObservations: "We need the path minimizing the maximum elevation: a minimax path problem. There are three prime approaches:\n1. Modified Dijkstra: Maintain min-heap of (max_elevation_so_far, r, c). When expanding neighbor (nr, nc), new_cost = max(curr_cost, grid[nr][nc]). Relaxation: dist[nr][nc] = min(dist[nr][nc], new_cost).\n2. Binary Search on Answer: The answer lies in [0, n^2 - 1]. For a guessed t, check if (n-1, n-1) is reachable via BFS using only cells with grid[r][c] <= t in O(N^2).\n3. DSU (Kruskal-style): Sort all N^2 cells by elevation. Add cells one by one, merging adjacent active cells. The first time (0,0) and (n-1, n-1) share the same root component, the elevation of that cell is the answer in O(N^2 alpha(N^2)).",
      algorithmSelection: "Modified Dijkstra with Priority Queue (cleanest and most robust).",
      stepByStep: [
        "1. Create 2D distance array `dist` initialized to infinity; set `dist[0][0] = grid[0][0]`.",
        "2. Min-heap stores {cost, r, c}. Push {grid[0][0], 0, 0}.",
        "3. While pq is not empty:",
        "   a. Pop {d, r, c}. If d > dist[r][c], continue.",
        "   b. If r == n - 1 and c == n - 1, return d.",
        "   c. For each of 4 neighbors (nr, nc):",
        "      newDist = max(d, grid[nr][nc])",
        "      If newDist < dist[nr][nc]:",
        "         dist[nr][nc] = newDist",
        "         Push {newDist, nr, nc} to pq.",
        "4. Return dist[n-1][n-1]."
      ]
    },
    cppCode: `#include <vector>
#include <queue>
#include <tuple>
#include <algorithm>

class Solution {
public:
    int swimInWater(std::vector<std::vector<int>>& grid) {
        int n = grid.size();
        std::vector<std::vector<int>> dist(n, std::vector<int>(n, 1e9));
        // Min-heap: {cost, r, c}
        std::priority_queue<std::tuple<int, int, int>,
                            std::vector<std::tuple<int, int, int>>,
                            std::greater<std::tuple<int, int, int>>> pq;

        dist[0][0] = grid[0][0];
        pq.push({grid[0][0], 0, 0});

        int dirs[4][2] = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};

        while (!pq.empty()) {
            auto [d, r, c] = pq.top();
            pq.pop();

            if (r == n - 1 && c == n - 1) return d;
            if (d > dist[r][c]) continue;

            for (auto& dir : dirs) {
                int nr = r + dir[0];
                int nc = c + dir[1];

                if (nr >= 0 && nr < n && nc >= 0 && nc < n) {
                    int nextDist = std::max(d, grid[nr][nc]);
                    if (nextDist < dist[nr][nc]) {
                        dist[nr][nc] = nextDist;
                        pq.push({nextDist, nr, nc});
                    }
                }
            }
        }

        return dist[n - 1][n - 1];
    }
};`,
    pythonCode: `import heapq
from typing import List

class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:
        n = len(grid)
        dist = [[float('inf')] * n for _ in range(n)]
        dist[0][0] = grid[0][0]
        
        # Priority queue stores (cost, r, c)
        pq = [(grid[0][0], 0, 0)]
        directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

        while pq:
            d, r, c = heapq.heappop(pq)

            if r == n - 1 and c == n - 1:
                return d
            
            if d > dist[r][c]:
                continue

            for dr, dc in directions:
                nr, nc = r + dr, c + dc
                if 0 <= nr < n and 0 <= nc < n:
                    next_dist = max(d, grid[nr][nc])
                    if next_dist < dist[nr][nc]:
                        dist[nr][nc] = next_dist
                        heapq.heappush(pq, (next_dist, nr, nc))

        return dist[n - 1][n - 1]`,
    complexity: {
      time: "O(N^2 log N)",
      timeExplanation: "Total states in the grid are N^2. Each state is pushed/popped from the priority queue with degree at most 4. Heap operations take O(log(N^2)) = O(log N). Total time is O(N^2 log N). Alternatively, DSU approach achieves O(N^2 alpha(N^2)).",
      space: "O(N^2)",
      spaceExplanation: "Distance matrix dist of size N x N and the min-heap containing up to O(N^2) elements."
    },
    commonMistakes: [
      "Standard summation Dijkstra: using `dist[nr][nc] = d + grid[nr][nc]` instead of minimax bottleneck `max(d, grid[nr][nc])`.",
      "Starting Dijkstra cost at 0 instead of `grid[0][0]`: The starting square must be submerged before you can even begin swimming.",
      "Forgetting to guard against outdated heap entries (`if (d > dist[r][c]) continue;`), leading to unnecessary work.",
      "Attempting greedy local choice (moving to the minimum neighbor), which gets stuck in dead ends."
    ],
    instructorNotes: {
      prerequisites: "Dijkstra's algorithm, Binary Search over monotonic predicates, DSU.",
      teachingOrder: "Present the problem and highlight the 'minimax' path formulation. Ask candidates how to modify standard shortest path relaxation. Then challenge them to formulate an alternative using Binary Search + BFS, and finally Kruskal's DSU algorithm.",
      keyLearningOutcomes: "Multi-paradigm flexibility: recognizing that minimax path problems can be solved via Dijkstra, Binary Search, or Disjoint Set Union.",
      difficultyRating: "Hard (LC Hard, CF 1800-1900)"
    }
  }
];
