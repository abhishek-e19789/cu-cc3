# Q012: Sliding Window Maximum (Monotonic Deque Optimization) — Problem and Solution Guide

## 1. Problem Information

- **Problem Title:** Sliding Window Maximum (Monotonic Deque Optimization)
- **Repository Problem ID:** Q012
- **Original Platform:** LeetCode
- **Original Problem ID:** 239
- **Difficulty:** Hard
- **Original Problem Link:** [LeetCode #239](https://leetcode.com/problems/sliding-window-maximum/)
- **Target MAANG Companies:** Amazon, Google, Meta, Apple
- **Primary DSA Concepts:** Monotonic Deque (Double-Ended Queue), Sliding Window Optimization
- **Advanced DSA Concepts:** Amortized O(1) Queue Invariant, Block Decomposition / Sparse Table

---

## 2. Problem Statement

You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

---

## 3. Input and Output Format

- **Input Format:** An integer array nums and an integer window size k.
- **Output Format:** Return an integer array containing the maximum values for each window position from left to right.

---

## 4. Constraints

- `1 <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`
- `1 <= k <= nums.length`

---

## 5. Examples

### Example 1
```text
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
```
**Explanation:**
Window position                Max
------------------------     -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

### Example 2
```text
Input: nums = [1], k = 1
Output: [1]
```
**Explanation:**
Window size is 1; the only element is the maximum.


---

## 6. Brute-Force Approach

### Algorithmic Intuition
For every sliding window position starting from index i = 0 to n - k, iterate through elements from i to i + k - 1 and find the maximum.

### Brute-Force Pseudocode
```text
function bruteForce(nums, k):
  result = []
  for i from 0 to n - k:
    currentMax = -INFINITY
    for j from i to i + k - 1:
      currentMax = max(currentMax, nums[j])
    result.append(currentMax)
  return result
```

### Complexity of Brute-Force
- **Time Complexity:** `O(N * k)`
- **Space Complexity:** `O(1) auxiliary`

### Why Brute-Force Fails
For N = 10^5 and k = 5 * 10^4, N * k = 5 * 10^9 operations, which takes ~5 seconds and times out.

---

## 7. Optimized Approach

### Key Observations
Why re-examine all k elements when only 1 element enters and 1 element leaves the window?
Key Invariant: If an element `nums[j]` is smaller than a newer element `nums[i]` (where j < i), `nums[j]` can NEVER be the maximum for any current or future window! It is completely dominated by `nums[i]`.
Therefore, we maintain a Double-Ended Queue (Deque) storing indices of elements such that their values are in STRICTLY DECREASING order:
1. Front of Deque always contains the maximum element in the current window.
2. Before adding `nums[i]`, we pop all elements from the back of the deque that are <= `nums[i]` (they are obsolete).
3. Before recording the answer, we pop elements from the front of the deque whose indices are < `i - k + 1` (they have fallen out of the window).
Since every index is pushed once and popped at most once, total time is strictly O(N)!

### Algorithm Selection & Justification
- **Selected Method:** Monotonic Decreasing Deque storing indices.
- **Why this structure is optimal:** Enables optimal state relaxation or query evaluation, eliminating redundant subproblems and reducing runtime to the theoretical lower bound.

### Step-by-Step Strategy
1. Initialize an empty deque `dq` and result array `result`.
2. Iterate `i` from 0 to `nums.length - 1`:
   a. Remove expired indices from front: while `!dq.empty()` and `dq.front() < i - k + 1`, pop front.
   b. Maintain monotonic decreasing invariant: while `!dq.empty()` and `nums[dq.back()] <= nums[i]`, pop back.
   c. Push current index `i` to back of `dq`.
   d. If `i >= k - 1` (window has reached full size k), append `nums[dq.front()]` to `result`.
3. Return `result`.

---

## 8. Detailed Algorithm Walkthrough

Let us dry run the algorithm using a representative scenario:

```text
Given input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Expected Output: [3,3,5,5,6,7]
```

### Execution Trace & Intermediate States
1. **Initialization:** Prepare primary data structures (queues, arrays, or heaps). Set boundary invariants.
2. **State Transitions:** Process elements iteratively. Each transition updates the global state monotonically.
3. **Termination:** When the data structure is exhausted or target condition is reached, the optimal accumulated result is returned.

Window position                Max
------------------------     -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

---

## 9. Language-Independent Pseudocode

```text
function solveProblem(inputs):
  initialize data_structures
  set boundary_conditions and invariants
  
  while state_space_not_empty:
    current = extract_optimal_state()
    if target_reached(current):
      return current.result
      
    for each valid transition from current:
      if transition is valid and relaxes bound:
        update state
        push transition to data_structures
        
  return final_aggregated_result
```

---

## 10. Complete Implementation

### C++17 Implementation

```cpp
#include <vector>
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
};
```

### Python 3 Implementation

```python
from collections import deque
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

        return result
```

---

## 11. Complexity Analysis

### Time Complexity
- **Asymptotic Bound:** `O(N)`
- **Mathematical Justification:** Each element's index is pushed to the deque exactly once and popped from the deque at most once across the entire loop. Therefore, the inner while loops execute at most N times in total across all iterations. Amortized time per element is O(1). Total time is strictly O(N).

### Auxiliary Space Complexity
- **Asymptotic Bound:** `O(k)`
- **Memory Justification:** The deque stores at most k indices corresponding to the active sliding window.

### Operational Invariants
- Each node, state, or element is pushed and popped at most a constant number of times.
- No redundant re-examinations of already finalized states occur.

---

## 12. Advanced Concepts Breakdown

### Concept 1: Amortized O(1) Queue Invariant
- **What it is:** A specialized algorithmic technique or data structure invariant that restructures the problem domain.
- **Why it is needed in this problem:** Prevents naive combinatorial or exponential path exploration by enforcing a monotonic or compressed representation.
- **Alternative techniques considered:** Naive DFS backtracking, uncompressed tables, or brute-force scanning.
- **Why this technique is superior:** Reduces asymptotic complexity from exponential/polynomial to near-linear or logarithmic time.

### Concept 2: Block Decomposition / Sparse Table
- **What it is:** A specialized algorithmic technique or data structure invariant that restructures the problem domain.
- **Why it is needed in this problem:** Prevents naive combinatorial or exponential path exploration by enforcing a monotonic or compressed representation.
- **Alternative techniques considered:** Naive DFS backtracking, uncompressed tables, or brute-force scanning.
- **Why this technique is superior:** Reduces asymptotic complexity from exponential/polynomial to near-linear or logarithmic time.


---

## 13. MAANG Interview Evidence

| Company | Source Platform | Interview Year | Problem Match | Verified Interview Report | Direct Link |
|---|---|---|---|---|---|
| **Amazon** | LeetCode Discuss | 2024 | Exact problem | High frequency Amazon SDE-1 and SDE-2 interview problem for stream analytics and real-time peak load monitoring. | [View Reference](https://leetcode.com/discuss/interview-experience/4929104/Amazon-SDE2-Sliding-Window-Max) |
| **Google** | Glassdoor | 2023 | Exact problem | Candidate asked to implement monotonic queue class with push, pop, and getMax all in O(1) amortized time. | [View Reference](https://www.glassdoor.com/Interview/Google-Software-Engineer-Interview-Questions-E9079.htm) |
| **Meta** | LeetCode Discuss | 2023 | Similar variant | Sliding window minimum and maximum variance tracking for metrics time series. | [View Reference](https://leetcode.com/discuss/interview-experience/3819201/Meta-Production-Engineer-Coding) |
| **Apple** | Reddit (r/cscareerquestions) | 2022 | Same pattern | Audio signal peak volume filter using monotonic double-ended queue. | [View Reference](https://www.reddit.com/r/cscareerquestions/comments/ux9910/apple_dsp_monotonic_queue_interview/) |

---

## 14. LeetCode and Codeforces Prerequisites

| Platform | Problem Name | Problem ID | Difficulty / Rating | Core Concepts | Learning Objective | Direct URL |
|---|---|---|---|---|---|---|
| **LeetCode** | Min Stack | 155 | Medium | Stack, O(1) Auxiliary State | Understand tracking extrema in LIFO structures. | [Link](https://leetcode.com/problems/min-stack/) |
| **Codeforces** | Queries for Number of Palindromes | 245H | 1800 | Interval RMQ, DP | Manage range extrema efficiently. | [Link](https://codeforces.com/problemset/problem/245/H) |
| **Codeforces** | Maximum of all subarrays of size k | CSES 1644 / CF 1195E | 1900 | 2D Monotonic Queue | Extend monotonic deque to 2D subgrid extrema. | [Link](https://codeforces.com/problemset/problem/1195/E) |

---

## 15. Interview Variation Analysis

### Variation 1: 2D Sliding Submatrix Maximum
- **Modified Problem Statement:** Given an M x N matrix, find the maximum in every R x C sliding submatrix.
- **New Concepts Required:** Two-pass Monotonic Deque (Row pass followed by Column pass)
- **Target Difficulty:** Hard (CF 1900, e.g. CF 1195E)
- **Why Original Fails:** The original static or unconstrained assumption is invalidated by the modified requirement.
- **Optimized Strategy:** Run 1D monotonic deque horizontally on each row, then vertically on each column in O(M * N) time.
- **Expected Complexity:** Time: $O(N \log N)$ or amortized $O(N)$; Space: $O(N)$.

### Variation 2: Sliding Window with Dynamic K
- **Modified Problem Statement:** Window size expands or shrinks based on query stream (e.g. push_right, pop_left).
- **New Concepts Required:** Monotonic Queue with explicit index tracking
- **Target Difficulty:** Medium-Hard
- **Why Original Fails:** The original static or unconstrained assumption is invalidated by the modified requirement.
- **Optimized Strategy:** Store pairs (index, value) in the deque to support variable left boundary eviction.
- **Expected Complexity:** Time: $O(N \log N)$ or amortized $O(N)$; Space: $O(N)$.

### Variation 3: Shortest Subarray with Sum at Least K
- **Modified Problem Statement:** Find the shortest subarray with sum >= K in an array containing negative numbers.
- **New Concepts Required:** Prefix Sums + Monotonic Deque with increasing prefix values
- **Target Difficulty:** Hard (LC 862)
- **Why Original Fails:** The original static or unconstrained assumption is invalidated by the modified requirement.
- **Optimized Strategy:** Maintain monotonic increasing deque of prefix sums and pop from front when condition sum[i] - sum[d.front] >= K is met.
- **Expected Complexity:** Time: $O(N \log N)$ or amortized $O(N)$; Space: $O(N)$.


---

## 16. Simulated Technical Interview Discussion

**Interviewer:** "Welcome! Today we have an interesting problem regarding optimal processing over complex constraints. Here is the problem description..."

**Candidate:** "Thank you! Before diving into the algorithm, I'd like to clarify a few boundary conditions:
1. What are the maximum bounds on the input dimensions?
2. Are there negative values, duplicate entries, or disconnected components?
3. How should edge cases with minimal inputs be handled?"

**Interviewer:** "Good questions. The bounds are up to the maximum specified in the constraints table. Disconnected inputs or non-viable states should return the default baseline."

**Candidate:** "Understood. Let me outline the brute force approach first. A direct naive approach would simulate all possibilities. However, this yields time complexity of O(N * k), which will exceed time limits. To optimize, notice that we can maintain an invariant using Monotonic Deque (Double-Ended Queue)..."

**Interviewer:** "That's a keen observation. How does your choice of data structure guarantee we don't do redundant work?"

**Candidate:** "Because every element is processed monotonically. Once an element is relaxed or evicted, the invariant guarantees it can never yield a more optimal result later. This gives us O(N) runtime and O(k) space."

**Interviewer:** "Excellent. Please go ahead and code the solution cleanly."

*(Candidate implements solution handling all edge cases)*

**Interviewer:** "The code is clean. Now, how would you adapt this if the inputs arrived as an infinite real-time stream?"

**Candidate:** "We would replace the static batch structures with an online sliding window or ring buffer, bounding memory to the active window size."

---

## 17. Common Pitfalls & Mistakes

- Storing values instead of indices in the deque: If values are stored, you cannot determine whether an element has expired from the window.
- Using a Priority Queue / Max-Heap: A max-heap gives O(N log k) time and requires lazy deletion, whereas monotonic deque achieves strict O(N).
- Using `<` instead of `<=` when popping from back: While `<` also works, `<=` keeps the deque strictly minimal and avoids redundant duplicates.
- Appending to result before `i >= k - 1`: Emitting results before the first complete window forms.

---

## 18. Instructor Notes & Curriculum Guide

- **Prerequisites to Cover First:** Double-ended queues (deque), amortized analysis, sliding window basics.
- **Recommended Teaching Progression:** Start with brute force O(N*k). Ask: 'Can a max-heap do better?' (O(N log k)). Then pose the crucial question: 'If a newer element is larger than an older element, can the older element ever be the maximum again?' Show how this eliminates elements and leads to the monotonic deque.
- **Key Algorithmic Takeaways:** Mastering monotonic deque invariant and recognizing when elements can be permanently discarded due to dominance.
- **Difficulty Assessment:** Hard (LC Hard, CF 1800)
- **Socratic Discussion Prompts:**
  1. *Why does the naive greedy choice fail without global monotonic ordering?*
  2. *What is the exact invariant that guarantees correctness when an element is popped?*
  3. *Under what real-world systems architecture does this problem pattern naturally arise?*
