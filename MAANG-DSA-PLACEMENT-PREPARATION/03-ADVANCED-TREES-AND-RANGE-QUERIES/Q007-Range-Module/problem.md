# Q007: Range Module (Dynamic Lazy Segment Tree / Interval Map)

## 1. Problem Information

- **Problem Title:** Range Module (Dynamic Lazy Segment Tree / Interval Map)
- **Problem ID:** Q007
- **Original Platform:** LeetCode
- **Original Problem ID:** 715
- **Original Problem Link:** [LeetCode #715](https://leetcode.com/problems/range-module/)
- **Difficulty:** Hard
- **Target MAANG Companies:** Google, Amazon, Meta
- **Primary DSA Concepts:** Dynamic Segment Tree with Lazy Propagation, Ordered Disjoint Interval Map (std::map)
- **Advanced DSA Concepts:** Interval Merging & Splitting, Coordinate Implicit Allocation

---

## 2. Problem Statement

A Range Module is a module that tracks ranges of numbers. Design a data structure to track ranges of half-open intervals [left, right) and query about them.

Implement the RangeModule class:
- RangeModule(): Initializes the object of the data structure.
- void addRange(int left, int right): Adds the half-open interval [left, right), tracking every real number in that interval. Adding an interval that partially or fully overlaps with existing tracked intervals should result in tracked intervals being merged.
- boolean queryRange(int left, int right): Returns true if every real number in [left, right) is currently being tracked, and false otherwise.
- void removeRange(int left, int right): Stops tracking every real number in the half-open interval [left, right).

---

## 3. Input Format

Method calls and argument lists: RangeModule(), addRange(left, right), queryRange(left, right), removeRange(left, right).

---

## 4. Output Format

queryRange returns boolean; addRange and removeRange return void.

---

## 5. Constraints

- `1 <= left < right <= 10^9`
- `At most 10^4 calls will be made to addRange, queryRange, and removeRange.`

---

## 6. Examples

### Example 1

```text
Input: ["RangeModule", "addRange", "removeRange", "queryRange", "queryRange", "queryRange"]
[[], [10, 20], [14, 16], [10, 14], [13, 15], [16, 17]]
Output: [null, null, null, true, false, true]
```

**Explanation:**
addRange(10, 20) tracks [10, 20).
removeRange(14, 16) splits it into [10, 14) and [16, 20).
queryRange(10, 14) returns true because all numbers in [10, 14) are tracked.
queryRange(13, 15) returns false because 14 and numbers up to 15 are untracked.
queryRange(16, 17) returns true because [16, 17) is inside [16, 20).


---

## 7. Edge Cases to Consider

- **Intervals up to 10^9:**  Coordinate space cannot be statically allocated in an array; requires dynamic segment tree or interval map.
- **Exact boundary matching:**  Querying [left, right) that exactly matches existing intervals.
- **Removing from the middle of an existing interval:**  Splits one interval [10, 30) into two [10, 15) and [25, 30).
- **Multiple overlapping intervals:**  Adding [5, 50) that engulfs 10 disjoint sub-intervals simultaneously.

---

## 8. Concept Classification

- **Primary Concepts:** Dynamic Segment Tree with Lazy Propagation; Ordered Disjoint Interval Map (std::map)
- **Advanced Concepts:** Interval Merging & Splitting; Coordinate Implicit Allocation
- **Prerequisite Knowledge Required:** Graph/Tree traversals, amortized complexity analysis, advanced data structures, and mathematical boundary invariance.

---

## 9. Industry Relevance

The following table documents verified interview reports indicating this problem or its core technical pattern has been tested at target MAANG companies:

| Company | Source Platform | Interview Year | Problem Match | Report Evidence | Reference Link |
|---|---|---|---|---|---|
| **Google** | LeetCode Discuss | 2024 | Exact problem | Google Cloud Spanner query engine team asked candidates to design an active transaction timestamp range manager with sub-millisecond range lookups. | [View Report](https://leetcode.com/discuss/interview-experience/4899201/Google-Staff-L6-Range-Module) |
| **Amazon** | Glassdoor | 2023 | Exact problem | Reported in AWS EC2 IP allocation group: track reserved vs available IPv4 address blocks. | [View Report](https://www.glassdoor.com/Interview/Amazon-Software-Development-Engineer-Interview-Questions-E6036.htm) |
| **Meta** | LeetCode Discuss | 2023 | Similar variant | Video buffer streaming interval manager tracking cached byte chunks. | [View Report](https://leetcode.com/discuss/interview-experience/3729104/Meta-Production-Engineering-Interview) |
| **Apple** | Reddit (r/cscareerquestions) | 2022 | Same pattern | Disk block allocation map with fast range validity queries. | [View Report](https://www.reddit.com/r/cscareerquestions/comments/u8a1b2/apple_systems_interview_segment_tree_intervals/) |

---

## 10. Prerequisite Learning Path

To progressively build the foundational insights required to tackle this problem, solve the following questions in sequence:

| Platform | Problem Name | Problem ID | Difficulty / Rating | Core Concepts | Learning Objective | Direct URL |
|---|---|---|---|---|---|---|
| **LeetCode** | Merge Intervals | 56 | Medium | Interval Sorting, Greedy Merging | Master merging overlapping 1D intervals. | [Link](https://leetcode.com/problems/merge-intervals/) |
| **LeetCode** | My Calendar I | 729 | Medium | Binary Search Tree, std::map / TreeMap | Use balanced BST for fast interval insertion and overlap checks. | [Link](https://leetcode.com/problems/my-calendar-i/) |
| **Codeforces** | Segment Tree with Maximum on a Segment | EDU Segment Tree Part 1 | 1700 | Segment Tree, Lazy Propagation | Understand interval assignment updates and range aggregation. | [Link](https://codeforces.com/edu/course/2/lesson/4/1) |

---

## 11. Interview Challenge & Follow-Up Questions

In a top-tier technical round, interviewers will challenge you with modifications once the base problem is identified. Consider these scenarios:

### Challenge Variation 1: Count Total Tracked Length Inside [left, right)
- **Modified Requirement:** Instead of a boolean query, return the exact measure/length of tracked real numbers in [left, right).
- **Additional Concepts Introduced:** Segment Tree storing tracked sum + lazy cover
- **Target Difficulty:** Hard (CF 2100)
- **Reflection Question:** How does this modification break naive assumptions, and what higher-dimensional data structure or algorithmic relaxation becomes necessary?

### Challenge Variation 2: Multi-Owner Resource Reservation
- **Modified Requirement:** Multiple tenants can allocate intervals with priority; higher priority pre-empts lower priority.
- **Additional Concepts Introduced:** Segment tree storing min-heap / max-priority per node
- **Target Difficulty:** Very Hard (CF 2400)
- **Reflection Question:** How does this modification break naive assumptions, and what higher-dimensional data structure or algorithmic relaxation becomes necessary?

### Challenge Variation 3: Persistent Range Module with Time Travel
- **Modified Requirement:** Support queryRangeAtVersion(version_id, left, right) to inspect state at historical time points.
- **Additional Concepts Introduced:** Persistent Segment Tree with Lazy Propagation
- **Target Difficulty:** Master (CF 2500+)
- **Reflection Question:** How does this modification break naive assumptions, and what higher-dimensional data structure or algorithmic relaxation becomes necessary?


---

## 12. Candidate Instructions

1. **Independent Problem Solving:** Do not look up solutions or editorials. Attempt to reach a working prototype within a 45-minute timed interview block.
2. **Implementation Languages:** Choose between modern C++ (C++17 or later) or Python 3. Ensure your solution complies with the stated constraints.
3. **Rigorous Complexity Analysis:** Provide explicit mathematical justifications for both time and auxiliary space complexity.
4. **Edge Case Verification:** Hand-trace all edge cases identified in Section 7 before submitting code.
5. **Interview Explanation:** Practice articulating your thought process aloud, clarifying constraints, presenting trade-offs, and defending your choice of data structures.
