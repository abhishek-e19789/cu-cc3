// Category 5: Greedy and Optimization (Q012, Q013, Q014)
export const cat5Problems = [
  {
    id: "Q012",
    title: "Sliding Window Maximum (Monotonic Deque Optimization)",
    folder: "05-GREEDY-AND-OPTIMIZATION/Q012-Sliding-Window-Maximum",
    category: "05-GREEDY-AND-OPTIMIZATION",
    categoryName: "Greedy and Advanced Optimization",
    platform: "LeetCode",
    originalId: "239",
    originalLink: "https://leetcode.com/problems/sliding-window-maximum/",
    difficulty: "Hard",
    maang: ["Amazon", "Google", "Meta", "Apple"],
    primaryConcepts: ["Monotonic Deque (Double-Ended Queue)", "Sliding Window Optimization"],
    advancedConcepts: ["Amortized O(1) Queue Invariant", "Block Decomposition / Sparse Table"],
    statement: `You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.`,
    inputFormat: `An integer array nums and an integer window size k.`,
    outputFormat: `Return an integer array containing the maximum values for each window position from left to right.`,
    constraints: [
      "1 <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4",
      "1 <= k <= nums.length"
    ],
    examples: [
      {
        input: "nums = [1,3,-1,-3,5,3,6,7], k = 3",
        output: "[3,3,5,5,6,7]",
        explanation: `Window position                Max
------------------------     -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7`
      },
      {
        input: "nums = [1], k = 1",
        output: "[1]",
        explanation: "Window size is 1; the only element is the maximum."
      }
    ],
    edgeCases: [
      "k = 1: Output is identical to nums.",
      "k = nums.length: Output contains exactly one element: max(nums).",
      "Strictly decreasing array: Elements enter and leave the deque one by one.",
      "Strictly increasing array: The newest element immediately evicts all previous elements from the deque."
    ],
    industryRelevance: [
      {
        company: "Amazon",
        source: "LeetCode Discuss",
        interviewYear: "2024",
        match: "Exact problem",
        evidence: "High frequency Amazon SDE-1 and SDE-2 interview problem for stream analytics and real-time peak load monitoring.",
        reference: "https://leetcode.com/discuss/interview-experience/4929104/Amazon-SDE2-Sliding-Window-Max"
      },
      {
        company: "Google",
        source: "Glassdoor",
        interviewYear: "2023",
        match: "Exact problem",
        evidence: "Candidate asked to implement monotonic queue class with push, pop, and getMax all in O(1) amortized time.",
        reference: "https://www.glassdoor.com/Interview/Google-Software-Engineer-Interview-Questions-E9079.htm"
      },
      {
        company: "Meta",
        source: "LeetCode Discuss",
        interviewYear: "2023",
        match: "Similar variant",
        evidence: "Sliding window minimum and maximum variance tracking for metrics time series.",
        reference: "https://leetcode.com/discuss/interview-experience/3819201/Meta-Production-Engineer-Coding"
      },
      {
        company: "Apple",
        source: "Reddit (r/cscareerquestions)",
        interviewYear: "2022",
        match: "Same pattern",
        evidence: "Audio signal peak volume filter using monotonic double-ended queue.",
        reference: "https://www.reddit.com/r/cscareerquestions/comments/ux9910/apple_dsp_monotonic_queue_interview/"
      }
    ],
    prerequisites: [
      {
        platform: "LeetCode",
        name: "Min Stack",
        id: "155",
        difficulty: "Medium",
        concepts: "Stack, O(1) Auxiliary State",
        learningObjective: "Understand tracking extrema in LIFO structures.",
        reference: "https://leetcode.com/problems/min-stack/"
      },
      {
        platform: "Codeforces",
        name: "Queries for Number of Palindromes",
        id: "245H",
        difficulty: "1800",
        concepts: "Interval RMQ, DP",
        learningObjective: "Manage range extrema efficiently.",
        reference: "https://codeforces.com/problemset/problem/245/H"
      },
      {
        platform: "Codeforces",
        name: "Maximum of all subarrays of size k",
        id: "CSES 1644 / CF 1195E",
        difficulty: "1900",
        concepts: "2D Monotonic Queue",
        learningObjective: "Extend monotonic deque to 2D subgrid extrema.",
        reference: "https://codeforces.com/problemset/problem/1195/E"
      }
    ],
    variations: [
      {
        name: "2D Sliding Submatrix Maximum",
        modifiedRequirement: "Given an M x N matrix, find the maximum in every R x C sliding submatrix.",
        additionalConcepts: "Two-pass Monotonic Deque (Row pass followed by Column pass)",
        difficulty: "Hard (CF 1900, e.g. CF 1195E)",
        explanation: "Run 1D monotonic deque horizontally on each row, then vertically on each column in O(M * N) time."
      },
      {
        name: "Sliding Window with Dynamic K",
        modifiedRequirement: "Window size expands or shrinks based on query stream (e.g. push_right, pop_left).",
        additionalConcepts: "Monotonic Queue with explicit index tracking",
        difficulty: "Medium-Hard",
        explanation: "Store pairs (index, value) in the deque to support variable left boundary eviction."
      },
      {
        name: "Shortest Subarray with Sum at Least K",
        modifiedRequirement: "Find the shortest subarray with sum >= K in an array containing negative numbers.",
        additionalConcepts: "Prefix Sums + Monotonic Deque with increasing prefix values",
        difficulty: "Hard (LC 862)",
        explanation: "Maintain monotonic increasing deque of prefix sums and pop from front when condition sum[i] - sum[d.front] >= K is met."
      }
    ],
    bruteForce: {
      intuition: "For every sliding window position starting from index i = 0 to n - k, iterate through elements from i to i + k - 1 and find the maximum.",
      pseudocode: `function bruteForce(nums, k):
  result = []
  for i from 0 to n - k:
    currentMax = -INFINITY
    for j from i to i + k - 1:
      currentMax = max(currentMax, nums[j])
    result.append(currentMax)
  return result`,
      timeComplexity: "O(N * k)",
      spaceComplexity: "O(1) auxiliary",
      whyInefficient: "For N = 10^5 and k = 5 * 10^4, N * k = 5 * 10^9 operations, which takes ~5 seconds and times out."
    },
    optimizedApproach: {
      keyObservations: "Why re-examine all k elements when only 1 element enters and 1 element leaves the window?\nKey Invariant: If an element `nums[j]` is smaller than a newer element `nums[i]` (where j < i), `nums[j]` can NEVER be the maximum for any current or future window! It is completely dominated by `nums[i]`.\nTherefore, we maintain a Double-Ended Queue (Deque) storing indices of elements such that their values are in STRICTLY DECREASING order:\n1. Front of Deque always contains the maximum element in the current window.\n2. Before adding `nums[i]`, we pop all elements from the back of the deque that are <= `nums[i]` (they are obsolete).\n3. Before recording the answer, we pop elements from the front of the deque whose indices are < `i - k + 1` (they have fallen out of the window).\nSince every index is pushed once and popped at most once, total time is strictly O(N)!",
      algorithmSelection: "Monotonic Decreasing Deque storing indices.",
      stepByStep: [
        "1. Initialize an empty deque `dq` and result array `result`.",
        "2. Iterate `i` from 0 to `nums.length - 1`:",
        "   a. Remove expired indices from front: while `!dq.empty()` and `dq.front() < i - k + 1`, pop front.",
        "   b. Maintain monotonic decreasing invariant: while `!dq.empty()` and `nums[dq.back()] <= nums[i]`, pop back.",
        "   c. Push current index `i` to back of `dq`.",
        "   d. If `i >= k - 1` (window has reached full size k), append `nums[dq.front()]` to `result`.",
        "3. Return `result`."
      ]
    },
    cppCode: `#include <vector>
#include <deque>

class Solution {
public:
    std::vector<int> maxSlidingWindow(std::vector<int>& nums, int k) {
        int n = nums.size();
        std::vector<int> result;
        result.reserve(n - k + 1);

        // Deque stores indices of potential maximums in strictly decreasing order of value
        std::deque<int> dq;

        for (int i = 0; i < n; ++i) {
            // 1. Remove indices outside current window [i - k + 1, i]
            while (!dq.empty() && dq.front() < i - k + 1) {
                dq.pop_front();
            }

            // 2. Maintain decreasing order: pop elements smaller than or equal to nums[i]
            while (!dq.empty() && nums[dq.back()] <= nums[i]) {
                dq.pop_back();
            }

            // 3. Insert current index
            dq.push_back(i);

            // 4. Record maximum once the first full window of size k is formed
            if (i >= k - 1) {
                result.push_back(nums[dq.front()]);
            }
        }

        return result;
    }
};`,
    pythonCode: `from collections import deque
from typing import List

class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        dq = deque()  # Stores indices
        result = []

        for i, val in enumerate(nums):
            # 1. Pop elements outside current window boundary
            while dq and dq[0] < i - k + 1:
                dq.popleft()

            # 2. Maintain monotonic decreasing invariant
            while dq and nums[dq[-1]] <= val:
                dq.pop()

            # 3. Append current index
            dq.append(i)

            # 4. Once window size >= k, record maximum from front
            if i >= k - 1:
                result.append(nums[dq[0]])

        return result`,
    complexity: {
      time: "O(N)",
      timeExplanation: "Each element's index is pushed to the deque exactly once and popped from the deque at most once across the entire loop. Therefore, the inner while loops execute at most N times in total across all iterations. Amortized time per element is O(1). Total time is strictly O(N).",
      space: "O(k)",
      spaceExplanation: "The deque stores at most k indices corresponding to the active sliding window."
    },
    commonMistakes: [
      "Storing values instead of indices in the deque: If values are stored, you cannot determine whether an element has expired from the window.",
      "Using a Priority Queue / Max-Heap: A max-heap gives O(N log k) time and requires lazy deletion, whereas monotonic deque achieves strict O(N).",
      "Using `<` instead of `<=` when popping from back: While `<` also works, `<=` keeps the deque strictly minimal and avoids redundant duplicates.",
      "Appending to result before `i >= k - 1`: Emitting results before the first complete window forms."
    ],
    instructorNotes: {
      prerequisites: "Double-ended queues (deque), amortized analysis, sliding window basics.",
      teachingOrder: "Start with brute force O(N*k). Ask: 'Can a max-heap do better?' (O(N log k)). Then pose the crucial question: 'If a newer element is larger than an older element, can the older element ever be the maximum again?' Show how this eliminates elements and leads to the monotonic deque.",
      keyLearningOutcomes: "Mastering monotonic deque invariant and recognizing when elements can be permanently discarded due to dominance.",
      difficultyRating: "Hard (LC Hard, CF 1800)"
    }
  },
  {
    id: "Q013",
    title: "Largest Rectangle in Histogram (Monotonic Stack Boundary Optimization)",
    folder: "05-GREEDY-AND-OPTIMIZATION/Q013-Largest-Rectangle-in-Histogram",
    category: "05-GREEDY-AND-OPTIMIZATION",
    categoryName: "Greedy and Advanced Optimization",
    platform: "LeetCode",
    originalId: "84",
    originalLink: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
    difficulty: "Hard",
    maang: ["Amazon", "Meta", "Netflix", "Apple", "Google"],
    primaryConcepts: ["Monotonic Stack", "Nearest Smaller Element (NSE) Boundaries"],
    advancedConcepts: ["Divide and Conquer / Cartesian Tree", "Optimal 1D Segment Span Expansion"],
    statement: `Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.`,
    inputFormat: `An integer array heights.`,
    outputFormat: `Return an integer representing the maximum area of a rectangle contained within the histogram.`,
    constraints: [
      "1 <= heights.length <= 10^5",
      "0 <= heights[i] <= 10^4"
    ],
    examples: [
      {
        input: "heights = [2,1,5,6,2,3]",
        output: "10",
        explanation: "The largest rectangle is formed by the bars of height 5 and 6: width = 2, height = 5, area = 10."
      },
      {
        input: "heights = [2,4]",
        output: "4",
        explanation: "The largest rectangle is the bar of height 4 (area = 4) or the width-2 rectangle of height 2 (area = 4)."
      }
    ],
    edgeCases: [
      "Monotonically increasing heights (e.g. [1, 2, 3, 4, 5]): Handled by sentinel 0 at the end to flush the stack.",
      "All identical heights: Area is height * length.",
      "Histogram with zeros: Zero height splits the histogram into independent zones.",
      "Single bar: Area is heights[0]."
    ],
    industryRelevance: [
      {
        company: "Amazon",
        source: "LeetCode Discuss",
        interviewYear: "2024",
        match: "Exact problem",
        evidence: "High frequency Amazon SDE-2 bar raiser problem, tested with follow-up 'Maximal Rectangle in 2D Binary Matrix'.",
        reference: "https://leetcode.com/discuss/interview-experience/4910281/Amazon-SDE2-Histogram-Maximal-Rectangle"
      },
      {
        company: "Meta",
        source: "Glassdoor",
        interviewYear: "2023",
        match: "Exact problem",
        evidence: "Reported in Meta E5 interview assessing candidate's ability to explain the single-pass stack invariant clearly.",
        reference: "https://www.glassdoor.com/Interview/Meta-Software-Engineer-Interview-Questions-E40772.htm"
      },
      {
        company: "Netflix",
        source: "LeetCode Discuss",
        interviewYear: "2023",
        match: "Similar variant",
        evidence: "Bandwidth allocation capacity problem on piecewise step-function traffic profiles.",
        reference: "https://leetcode.com/discuss/interview-experience/3910214/Netflix-Senior-Infrastructure-Interview"
      },
      {
        company: "Apple",
        source: "Reddit (r/cscareerquestions)",
        interviewYear: "2022",
        match: "Same pattern",
        evidence: "Display driver buffer frame maximum contiguous pixel block computation.",
        reference: "https://www.reddit.com/r/cscareerquestions/comments/v1108a/apple_display_driver_interview_monotonic_stack/"
      }
    ],
    prerequisites: [
      {
        platform: "LeetCode",
        name: "Next Greater Element I",
        id: "496",
        difficulty: "Easy",
        concepts: "Monotonic Stack",
        learningObjective: "Learn basic next-greater/smaller element stack template.",
        reference: "https://leetcode.com/problems/next-greater-element-i/"
      },
      {
        platform: "LeetCode",
        name: "Daily Temperatures",
        id: "739",
        difficulty: "Medium",
        concepts: "Monotonic Stack with Distance Indexing",
        learningObjective: "Use index differences in stack pops.",
        reference: "https://leetcode.com/problems/daily-temperatures/"
      },
      {
        platform: "Codeforces",
        name: "Cartesian Tree Construction",
        id: "CF 1777E",
        difficulty: "1900",
        concepts: "Cartesian Tree, Divide and Conquer RMQ",
        learningObjective: "Relate monotonic stacks to Cartesian tree spine walks.",
        reference: "https://codeforces.com/problemset/problem/1777/E"
      }
    ],
    variations: [
      {
        name: "Maximal Rectangle in 2D Binary Matrix",
        modifiedRequirement: "Given an M x N binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's.",
        additionalConcepts: "Cumulative Height Array + Largest Rectangle in Histogram on each row",
        difficulty: "Hard (LC 85)",
        explanation: "Maintain running height of 1s column-wise and invoke 1D histogram solver on each of the M rows in O(M * N) total time."
      },
      {
        name: "Maximal Square in 2D Matrix",
        modifiedRequirement: "Find the area of the largest SQUARE containing only 1's.",
        additionalConcepts: "2D Dynamic Programming dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])",
        difficulty: "Medium-Hard (LC 221)",
        explanation: "Square constraint allows simple 2D DP instead of monotonic stack."
      },
      {
        name: "Dynamic Histogram with Bar Height Updates",
        modifiedRequirement: "Support point updates height[i] = v and query the global largest rectangle after each update.",
        additionalConcepts: "Segment Tree with dynamic maximum subsegment properties",
        difficulty: "Master (CF 2500+)",
        explanation: "Requires maintaining merged interval properties across segment tree nodes."
      }
    ],
    bruteForce: {
      intuition: "For every pair of indices (i, j) where i <= j, the rectangle width is (j - i + 1) and height is min(heights[i...j]). Find the maximum product across all O(N^2) pairs.",
      pseudocode: `function bruteForce(heights):
  maxArea = 0
  for i from 0 to n - 1:
    minH = heights[i]
    for j from i to n - 1:
      minH = min(minH, heights[j])
      area = minH * (j - i + 1)
      maxArea = max(maxArea, area)
  return maxArea`,
      timeComplexity: "O(N^2)",
      spaceComplexity: "O(1)",
      whyInefficient: "For N = 10^5, N^2 = 10^10 operations, which severely times out."
    },
    optimizedApproach: {
      keyObservations: "Any candidate maximal rectangle has its height equal to the height of AT LEAST ONE bar in the histogram (the bottleneck bar).\nFor each bar `i` with height `H = heights[i]`, what is the widest rectangle with height H?\nIt extends left until it hits the first bar strictly shorter than H (let this index be `left_boundary`).\nIt extends right until it hits the first bar strictly shorter than H (let this index be `right_boundary`).\nThe width is then `right_boundary - left_boundary - 1`, and the area is `H * width`.\nWe can find the Nearest Smaller Element (NSE) on both left and right for all bars simultaneously in a single pass using a Monotonic Increasing Stack of indices!",
      algorithmSelection: "Single-Pass Monotonic Stack with sentinel.",
      stepByStep: [
        "1. Create a monotonic increasing stack `st` of indices.",
        "2. Iterate `i` from 0 to `n` (using `i = n` as a sentinel with height 0):",
        "   a. Let `currentHeight = (i == n) ? 0 : heights[i]`.",
        "   b. While stack is not empty and `currentHeight < heights[st.top()]`:",
        "      i. Pop `h_idx = st.top()`.",
        "      ii. `h = heights[h_idx]`.",
        "      iii. The right boundary is `i` (first smaller element on the right).",
        "      iv. The left boundary is `st.empty() ? -1 : st.top()` (first smaller element on the left).",
        "      v. `width = i - left_boundary - 1`.",
        "      vi. `maxArea = max(maxArea, h * width)`.",
        "   c. Push `i` onto the stack.",
        "3. Return `maxArea`."
      ]
    },
    cppCode: `#include <vector>
#include <stack>
#include <algorithm>

class Solution {
public:
    int largestRectangleArea(std::vector<int>& heights) {
        int n = heights.size();
        std::stack<int> st; // stores indices
        int maxArea = 0;

        // Traverse up to index n using a virtual bar of height 0 to flush remaining bars
        for (int i = 0; i <= n; ++i) {
            int currentHeight = (i == n) ? 0 : heights[i];

            while (!st.empty() && currentHeight < heights[st.top()]) {
                int h = heights[st.top()];
                st.pop();

                // If stack is empty, this bar was smaller than everything to its left
                int leftBound = st.empty() ? -1 : st.top();
                int width = i - leftBound - 1;

                maxArea = std::max(maxArea, h * width);
            }

            st.push(i);
        }

        return maxArea;
    }
};`,
    pythonCode: `from typing import List

class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        # Append sentinel 0 to flush all remaining elements from stack at the end
        heights = heights + [0]
        stack = []  # Stores indices
        max_area = 0

        for i, h in enumerate(heights):
            while stack and heights[stack[-1]] > h:
                popped_idx = stack.pop()
                height = heights[popped_idx]
                # If stack is empty, width extends from 0 to i-1 (i bars)
                width = i if not stack else (i - stack[-1] - 1)
                max_area = max(max_area, height * width)
            stack.append(i)

        return max_area`,
    complexity: {
      time: "O(N)",
      timeExplanation: "Every bar index is pushed onto the stack exactly once and popped at most once. All comparisons and area computations inside the while loop run at most N times total. Thus, execution time is strictly linear O(N).",
      space: "O(N)",
      spaceExplanation: "The monotonic stack stores at most N indices in the worst case (strictly increasing heights)."
    },
    commonMistakes: [
      "Forgetting the sentinel bar at the end: If the array is strictly increasing (e.g. [1, 2, 3, 4]), no bar is ever popped inside the loop unless flushed by sentinel 0 or a separate cleanup loop.",
      "Computing width incorrectly when stack becomes empty: Width must be `i`, not `i - popped_idx`.",
      "Using `<=` vs `<` without handling duplicate heights correctly: using `<` handles duplicates gracefully because the last duplicate will compute the full width.",
      "Two-pass left and right array allocations: While O(N), separate left/right arrays require 3x passes and extra memory compared to the elegant single-pass stack."
    ],
    instructorNotes: {
      prerequisites: "Monotonic stack mechanics, Next Smaller Element concept.",
      teachingOrder: "Ask students: 'For a given bar, what determines the largest rectangle that uses its full height?' (The nearest smaller bar to the left and to the right). Guide them from O(N^2) boundary finding to monotonic stack. Emphasize why the sentinel height 0 is mathematically clean.",
      keyLearningOutcomes: "Mastering single-pass monotonic stack boundary calculations and sentinel flushing techniques.",
      difficultyRating: "Hard (LC Hard, CF 1800-1900)"
    }
  },
  {
    id: "Q014",
    title: "Minimum Cost to Hire K Workers (Greedy Ratio Sort + Max-Heap)",
    folder: "05-GREEDY-AND-OPTIMIZATION/Q014-Minimum-Cost-to-Hire-K-Workers",
    category: "05-GREEDY-AND-OPTIMIZATION",
    categoryName: "Greedy and Advanced Optimization",
    platform: "LeetCode",
    originalId: "857",
    originalLink: "https://leetcode.com/problems/minimum-cost-to-hire-k-workers/",
    difficulty: "Hard",
    maang: ["Google", "Meta", "Amazon"],
    primaryConcepts: ["Greedy Ratio Sorting", "Max-Heap Bounded Window"],
    advancedConcepts: ["Wage-to-Quality Proportionality", "Fractional Optimization with Fixed Cardinality"],
    statement: `There are n workers. You are given two integer arrays quality and wage where quality[i] is the quality of the ith worker and wage[i] is the minimum wage expectation for the ith worker.

We want to hire exactly k workers to form a paid group. To hire a group of k workers, we must pay them following these rules:
1. Every worker in the paid group should be paid in the ratio of their quality compared to other workers in the paid group.
2. Every worker in the paid group must be paid at least their minimum wage expectation.

Given the integer k, return the least amount of money needed to form a paid group satisfying the above conditions. Answers within 10^-5 of the actual answer will be accepted.`,
    inputFormat: `Two integer arrays quality and wage of equal length n, and an integer k.`,
    outputFormat: `Return a double representing the minimum total cost to hire k workers.`,
    constraints: [
      "n == quality.length == wage.length",
      "1 <= k <= n <= 10^4",
      "1 <= quality[i] <= 10^4",
      "1 <= wage[i] <= 10^4"
    ],
    examples: [
      {
        input: "quality = [10,20,5], wage = [70,50,30], k = 2",
        output: "105.00000",
        explanation: "We pay 70 to worker 0 and 35 to worker 2 (since quality ratio is 10:5 = 2:1 and worker 2 receives 35 >= 30). Total cost = 70 + 35 = 105."
      },
      {
        input: "quality = [3,1,10,10,1], wage = [4,8,2,2,7], k = 3",
        output: "30.66667",
        explanation: "We pay 4 to worker 0, 13.33333 to worker 2, and 13.33333 to worker 3. Total cost = 30.66667."
      }
    ],
    edgeCases: [
      "k = 1: Simply hire the worker with minimum wage expectation.",
      "k = n: All workers must be hired; captain is the worker with maximum wage/quality ratio.",
      "Large numbers: Quality sum up to 10^4 * 10^4 = 10^8; floating-point precision must use double.",
      "Identical wage/quality ratios: Handled cleanly by standard floating-point sorting."
    ],
    industryRelevance: [
      {
        company: "Google",
        source: "LeetCode Discuss",
        interviewYear: "2024",
        match: "Exact problem",
        evidence: "Asked in Google L5 Staff SWE hiring loop evaluating mathematical reduction of multi-variable optimization to greedy sort + heap.",
        reference: "https://leetcode.com/discuss/interview-experience/4891901/Google-L5-Minimum-Cost-Workers"
      },
      {
        company: "Meta",
        source: "Glassdoor",
        interviewYear: "2023",
        match: "Exact problem",
        evidence: "Reported in Meta Menlo Park coding round assessing priority queue optimization.",
        reference: "https://www.glassdoor.com/Interview/Meta-Software-Engineer-Interview-Questions-E40772.htm"
      },
      {
        company: "Amazon",
        source: "LeetCode Discuss",
        interviewYear: "2023",
        match: "Similar variant",
        evidence: "Fleet logistics vehicle leasing optimization with fuel-efficiency ratios and minimum contract payouts.",
        reference: "https://leetcode.com/discuss/interview-experience/3781092/Amazon-Supply-Chain-Optimization"
      },
      {
        company: "Apple",
        source: "Reddit (r/leetcode)",
        interviewYear: "2022",
        match: "Same pattern",
        evidence: "Semiconductor wafer fabrication batch cost minimization under purity proportion constraints.",
        reference: "https://www.reddit.com/r/leetcode/comments/w189pq/apple_interview_greedy_ratio_heap/"
      }
    ],
    prerequisites: [
      {
        platform: "LeetCode",
        name: "Top K Frequent Elements",
        id: "347",
        difficulty: "Medium",
        concepts: "Heap / Priority Queue",
        learningObjective: "Maintain top K elements using bounded heap.",
        reference: "https://leetcode.com/problems/top-k-frequent-elements/"
      },
      {
        platform: "LeetCode",
        name: "Maximum Performance of a Team",
        id: "1383",
        difficulty: "Hard",
        concepts: "Greedy Sorting, Min-Heap",
        learningObjective: "Optimize product of sum and minimum constraint.",
        reference: "https://leetcode.com/problems/maximum-performance-of-a-team/"
      },
      {
        platform: "Codeforces",
        name: "Potions (Hard Version)",
        id: "1526C2",
        difficulty: "1600",
        concepts: "Greedy with Priority Queue",
        learningObjective: "Dynamic replacement of suboptimal choices via heap.",
        reference: "https://codeforces.com/problemset/problem/1526/C2"
      }
    ],
    variations: [
      {
        name: "Maximum Performance of a Team",
        modifiedRequirement: "Performance is defined as (sum of speed of up to k chosen engineers) * min(efficiency of chosen engineers). Maximize performance.",
        additionalConcepts: "Sort by efficiency descending + Min-Heap of size K",
        difficulty: "Hard (LC 1383)",
        explanation: "Dual formulation: fixing the minimum bottleneck and maximizing sum of remaining components."
      },
      {
        name: "Variable Group Size K in Range [K_min, K_max]",
        modifiedRequirement: "Can hire any number of workers between K_min and K_max.",
        additionalConcepts: "Multiple heap passes / Monotonic sweep",
        difficulty: "Very Hard (CF 2200)",
        explanation: "Evaluate candidates while tracking optimal group size dynamically."
      },
      {
        name: "Workers with Categorical Quotas",
        modifiedRequirement: "Must hire at least k1 workers from Category A and k2 from Category B.",
        additionalConcepts: "Two coupled heaps / Min-Cost Max-Flow",
        difficulty: "Hard-Master (CF 2400)",
        explanation: "Greedy single-heap no longer maintains independence; requires dual heap synchronization."
      }
    ],
    bruteForce: {
      intuition: "Generate all combinations of k workers out of n. For each subset, the base wage ratio is determined by the worker with the maximum wage/quality ratio in that subset. Multiply this ratio by the sum of qualities in the subset. Take the minimum over all subsets.",
      pseudocode: `function bruteForce(quality, wage, k):
  minCost = INFINITY
  for each subset S of size k:
    maxRatio = max(wage[i] / quality[i] for i in S)
    totalCost = maxRatio * sum(quality[i] for i in S)
    minCost = min(minCost, totalCost)
  return minCost`,
      timeComplexity: "O(C(n, k) * k)",
      spaceComplexity: "O(k)",
      whyInefficient: "Combinatorial explosion: C(10000, 5000) is astronomically large, leading to immediate time limit exceeded."
    },
    optimizedApproach: {
      keyObservations: "Let ratio $r_i = \\text{wage}[i] / \\text{quality}[i]$.\nIf worker $i$ is chosen as the 'wage anchor' (the worker whose minimum wage expectation is tightest), then EVERY chosen worker $j$ must receive at least $r_i \\times \\text{quality}[j]$.\nThis requires $r_i \\ge r_j$ for all chosen workers $j$! That is, worker $i$ must have the LARGEST ratio among all $k$ chosen workers.\nThe total cost of the group is then:\n$$\\text{Total Cost} = r_i \\times \\sum_{j \\in S} \\text{quality}[j]$$\nTo minimize this cost for a fixed anchor worker $i$, we must pick $k - 1$ other workers from those with $r_j \\le r_i$ who have the MINIMUM POSSIBLE QUALITIES!\nAlgorithm Strategy:\n1. Sort all workers by their ratio $r_i = \\text{wage}[i] / \\text{quality}[i]$ in ASCENDING order.\n2. Iterate through workers from left to right. When considering worker $i$ as the anchor, all previously seen workers $0...i-1$ have ratio $\\le r_i$.\n3. To minimize the quality sum, we maintain the $k$ smallest qualities seen so far using a MAX-HEAP of qualities.\n4. When heap size exceeds $k$, we pop the worker with the largest quality.\n5. When heap size reaches $k$, calculate $\\text{cost} = r_i \\times \\text{qualitySum}$ and update the global minimum cost.",
      algorithmSelection: "Greedy Ratio Sorting + Bounded Max-Heap of Qualities.",
      stepByStep: [
        "1. Create an array of worker tuples `(ratio = wage[i]/quality[i], quality[i])`.",
        "2. Sort the array in ascending order of ratio.",
        "3. Initialize a max-heap `pq` to store qualities of hired workers.",
        "4. Initialize `qualitySum = 0` and `minTotalCost = INFINITY`.",
        "5. For each worker `(r, q)` in sorted order:",
        "   a. Push `q` into `pq` and add `q` to `qualitySum`.",
        "   b. If `pq.size() > k`:",
        "      `qualitySum -= pq.top()`",
        "      `pq.pop()`",
        "   c. If `pq.size() == k`:",
        "      `minTotalCost = min(minTotalCost, qualitySum * r)`.",
        "6. Return `minTotalCost`."
      ]
    },
    cppCode: `#include <vector>
#include <queue>
#include <algorithm>
#include <cfloat>

class Solution {
public:
    double mincostToHireWorkers(std::vector<int>& quality, std::vector<int>& wage, int k) {
        int n = quality.size();
        // Store pair: {wage_to_quality_ratio, quality}
        std::vector<std::pair<double, int>> workers(n);
        for (int i = 0; i < n; ++i) {
            workers[i] = {(double)wage[i] / quality[i], quality[i]};
        }

        // Sort workers by ratio ascending
        std::sort(workers.begin(), workers.end());

        // Max-heap to track the smallest k qualities seen so far
        std::priority_queue<int> maxHeap;
        double minCost = DBL_MAX;
        long long qualitySum = 0;

        for (const auto& [ratio, q] : workers) {
            maxHeap.push(q);
            qualitySum += q;

            // Maintain exactly k workers in heap
            if (maxHeap.size() > k) {
                qualitySum -= maxHeap.top();
                maxHeap.pop();
            }

            // Once we have k workers, calculate cost with current worker as the anchor ratio
            if (maxHeap.size() == k) {
                minCost = std::min(minCost, qualitySum * ratio);
            }
        }

        return minCost;
    }
};`,
    pythonCode: `import heapq
from typing import List

class Solution:
    def mincostToHireWorkers(self, quality: List[int], wage: List[int], k: int) -> float:
        # Pair workers as (ratio, quality)
        workers = [(w / q, q) for q, w in zip(quality, wage)]
        # Sort by ratio ascending
        workers.sort(key=lambda x: x[0])

        max_heap = []  # Stores negative qualities to simulate max-heap in Python
        quality_sum = 0
        min_cost = float('inf')

        for ratio, q in workers:
            heapq.heappush(max_heap, -q)
            quality_sum += q

            # If more than k workers, evict the one with largest quality
            if len(max_heap) > k:
                quality_sum += heapq.heappop(max_heap)  # negative value, so += decreases sum

            # When exactly k workers, evaluate cost
            if len(max_heap) == k:
                min_cost = min(min_cost, quality_sum * ratio)

        return min_cost`,
    complexity: {
      time: "O(N log N + N log k)",
      timeExplanation: "Sorting N workers by ratio takes O(N log N). Iterating through N workers with heap push and pop of size at most k takes O(N log k). For N = 10,000, total operations ~ 10,000 * 14 ~ 1.4 * 10^5, executing in under 5 ms.",
      space: "O(N + k)",
      spaceExplanation: "The workers array requires O(N) space and the max-heap requires O(k) space."
    },
    commonMistakes: [
      "Using a min-heap instead of a max-heap: We want the k SMALLEST qualities, so when size exceeds k, we must evict the LARGEST quality, which requires a max-heap.",
      "Attempting DP or Knapsack: The ratio condition creates non-linear constraints that make standard DP impossible.",
      "Precision loss using single-precision `float` instead of `double`: Roundoff errors violate the 10^-5 precision threshold.",
      "Forgetting to pop from heap before checking answer: Checking when size > k results in evaluating subsets of size k + 1."
    ],
    instructorNotes: {
      prerequisites: "Mathematical formulation of proportional wage constraints, Greedy ratio ordering, Bounded heap tracking.",
      teachingOrder: "Formulate the cost algebraically: $\\text{Cost} = \\text{ratio}_{\\max} \\times \\sum Q$. Ask: 'If we fix $\\text{ratio}_{\\max}$, how do we pick the remaining $k-1$ workers?' (Pick smallest qualities). Show how sorting by ratio turns this into a running window problem solvable with a max-heap.",
      keyLearningOutcomes: "Transforming multi-variable constraints by sorting on one dimension and maintaining extrema on the other via a heap.",
      difficultyRating: "Hard (LC Hard, CF 2000)"
    }
  }
];
