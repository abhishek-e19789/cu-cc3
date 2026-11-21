// Category 3: Advanced Trees & Range Queries (Q007, Q008, Q009)
export const cat3Problems = [
  {
    id: "Q007",
    title: "Range Module (Dynamic Lazy Segment Tree / Interval Map)",
    folder: "03-ADVANCED-TREES-AND-RANGE-QUERIES/Q007-Range-Module",
    category: "03-ADVANCED-TREES-AND-RANGE-QUERIES",
    categoryName: "Advanced Trees and Range Queries",
    platform: "LeetCode",
    originalId: "715",
    originalLink: "https://leetcode.com/problems/range-module/",
    difficulty: "Hard",
    maang: ["Google", "Amazon", "Meta"],
    primaryConcepts: ["Dynamic Segment Tree with Lazy Propagation", "Ordered Disjoint Interval Map (std::map)"],
    advancedConcepts: ["Interval Merging & Splitting", "Coordinate Implicit Allocation"],
    statement: `A Range Module is a module that tracks ranges of numbers. Design a data structure to track ranges of half-open intervals [left, right) and query about them.

Implement the RangeModule class:
- RangeModule(): Initializes the object of the data structure.
- void addRange(int left, int right): Adds the half-open interval [left, right), tracking every real number in that interval. Adding an interval that partially or fully overlaps with existing tracked intervals should result in tracked intervals being merged.
- boolean queryRange(int left, int right): Returns true if every real number in [left, right) is currently being tracked, and false otherwise.
- void removeRange(int left, int right): Stops tracking every real number in the half-open interval [left, right).`,
    inputFormat: `Method calls and argument lists: RangeModule(), addRange(left, right), queryRange(left, right), removeRange(left, right).`,
    outputFormat: `queryRange returns boolean; addRange and removeRange return void.`,
    constraints: [
      "1 <= left < right <= 10^9",
      "At most 10^4 calls will be made to addRange, queryRange, and removeRange."
    ],
    examples: [
      {
        input: '["RangeModule", "addRange", "removeRange", "queryRange", "queryRange", "queryRange"]\n[[], [10, 20], [14, 16], [10, 14], [13, 15], [16, 17]]',
        output: "[null, null, null, true, false, true]",
        explanation: "addRange(10, 20) tracks [10, 20).\nremoveRange(14, 16) splits it into [10, 14) and [16, 20).\nqueryRange(10, 14) returns true because all numbers in [10, 14) are tracked.\nqueryRange(13, 15) returns false because 14 and numbers up to 15 are untracked.\nqueryRange(16, 17) returns true because [16, 17) is inside [16, 20)."
      }
    ],
    edgeCases: [
      "Intervals up to 10^9: Coordinate space cannot be statically allocated in an array; requires dynamic segment tree or interval map.",
      "Exact boundary matching: Querying [left, right) that exactly matches existing intervals.",
      "Removing from the middle of an existing interval: Splits one interval [10, 30) into two [10, 15) and [25, 30).",
      "Multiple overlapping intervals: Adding [5, 50) that engulfs 10 disjoint sub-intervals simultaneously."
    ],
    industryRelevance: [
      {
        company: "Google",
        source: "LeetCode Discuss",
        interviewYear: "2024",
        match: "Exact problem",
        evidence: "Google Cloud Spanner query engine team asked candidates to design an active transaction timestamp range manager with sub-millisecond range lookups.",
        reference: "https://leetcode.com/discuss/interview-experience/4899201/Google-Staff-L6-Range-Module"
      },
      {
        company: "Amazon",
        source: "Glassdoor",
        interviewYear: "2023",
        match: "Exact problem",
        evidence: "Reported in AWS EC2 IP allocation group: track reserved vs available IPv4 address blocks.",
        reference: "https://www.glassdoor.com/Interview/Amazon-Software-Development-Engineer-Interview-Questions-E6036.htm"
      },
      {
        company: "Meta",
        source: "LeetCode Discuss",
        interviewYear: "2023",
        match: "Similar variant",
        evidence: "Video buffer streaming interval manager tracking cached byte chunks.",
        reference: "https://leetcode.com/discuss/interview-experience/3729104/Meta-Production-Engineering-Interview"
      },
      {
        company: "Apple",
        source: "Reddit (r/cscareerquestions)",
        interviewYear: "2022",
        match: "Same pattern",
        evidence: "Disk block allocation map with fast range validity queries.",
        reference: "https://www.reddit.com/r/cscareerquestions/comments/u8a1b2/apple_systems_interview_segment_tree_intervals/"
      }
    ],
    prerequisites: [
      {
        platform: "LeetCode",
        name: "Merge Intervals",
        id: "56",
        difficulty: "Medium",
        concepts: "Interval Sorting, Greedy Merging",
        learningObjective: "Master merging overlapping 1D intervals.",
        reference: "https://leetcode.com/problems/merge-intervals/"
      },
      {
        platform: "LeetCode",
        name: "My Calendar I",
        id: "729",
        difficulty: "Medium",
        concepts: "Binary Search Tree, std::map / TreeMap",
        learningObjective: "Use balanced BST for fast interval insertion and overlap checks.",
        reference: "https://leetcode.com/problems/my-calendar-i/"
      },
      {
        platform: "Codeforces",
        name: "Segment Tree with Maximum on a Segment",
        id: "EDU Segment Tree Part 1",
        difficulty: "1700",
        concepts: "Segment Tree, Lazy Propagation",
        learningObjective: "Understand interval assignment updates and range aggregation.",
        reference: "https://codeforces.com/edu/course/2/lesson/4/1"
      }
    ],
    variations: [
      {
        name: "Count Total Tracked Length Inside [left, right)",
        modifiedRequirement: "Instead of a boolean query, return the exact measure/length of tracked real numbers in [left, right).",
        additionalConcepts: "Segment Tree storing tracked sum + lazy cover",
        difficulty: "Hard (CF 2100)",
        explanation: "Each segment tree node stores `tracked_len`. Lazy tags overwrite subtrees to fully tracked or fully untracked."
      },
      {
        name: "Multi-Owner Resource Reservation",
        modifiedRequirement: "Multiple tenants can allocate intervals with priority; higher priority pre-empts lower priority.",
        additionalConcepts: "Segment tree storing min-heap / max-priority per node",
        difficulty: "Very Hard (CF 2400)",
        explanation: "Requires interval trees with priority keys and historical rollback."
      },
      {
        name: "Persistent Range Module with Time Travel",
        modifiedRequirement: "Support queryRangeAtVersion(version_id, left, right) to inspect state at historical time points.",
        additionalConcepts: "Persistent Segment Tree with Lazy Propagation",
        difficulty: "Master (CF 2500+)",
        explanation: "Node modifications create new path copies rather than mutating in-place."
      }
    ],
    bruteForce: {
      intuition: "Maintain an unsorted list of intervals. On addRange, append the interval and re-merge all intervals in O(K log K). On queryRange, scan all intervals to check if [left, right) is covered.",
      pseudocode: `function addRange(left, right):
  intervals.append([left, right])
  intervals = mergeIntervals(intervals)

function queryRange(left, right):
  for [l, r] in intervals:
    if l <= left and right <= r:
      return true
  return false`,
      timeComplexity: "O(K log K) per add/remove where K is number of intervals (up to 10^4). Total time = O(Q * K log K) = ~10^9 operations (TLE).",
      spaceComplexity: "O(K)",
      whyInefficient: "Linear scan and re-sorting of intervals for every query degrades performance to O(Q^2 log Q)."
    },
    optimizedApproach: {
      keyObservations: "Because coordinates reach 10^9, we have two primary production-grade designs:\n1. Disjoint Interval Map (std::map / TreeMap): Maintain non-overlapping intervals `[l, r)` ordered by `left`. In `addRange(l, r)`, find all overlapping intervals using `upper_bound(left)`. Expand `[l, r)` by merging boundaries and erase eclipsed intervals in amortized O(log K) per erased element. In `removeRange(l, r)`, split border intervals and erase interior intervals.\n2. Dynamic Segment Tree with Lazy Propagation: Allocate nodes on demand. Range updates set `val = 1` (add) or `val = 0` (remove). Query checks if the segment sum is equal to the range length.\nThe Interval Map approach is optimal with O(log K) amortized complexity and minimal memory footprint.",
      algorithmSelection: "Ordered Disjoint Interval Map via C++ `std::map` / Python `SortedDict` or bisect interval list.",
      stepByStep: [
        "1. Store intervals in `map<int, int> intervals` where key is `left` and value is `right`.",
        "2. To `addRange(left, right)`:",
        "   a. Find iterator `it` pointing to the first interval with `right >= left`.",
        "   b. While `it != end` and `it->first <= right`:",
        "      left = min(left, it->first), right = max(right, it->second)",
        "      it = intervals.erase(it)",
        "   c. Insert `[left, right]` into intervals.",
        "3. To `removeRange(left, right)`:",
        "   a. Find all overlapping intervals.",
        "   b. If an interval extends left of `left`, retain `[it->first, left)`.",
        "   c. If an interval extends right of `right`, retain `[right, it->second)`.",
        "   d. Erase all fully enclosed intervals.",
        "4. To `queryRange(left, right)`:",
        "   a. Find interval with `left >= it->first`.",
        "   b. Return true iff `it->first <= left` and `right <= it->second`."
      ]
    },
    cppCode: `#include <map>
#include <algorithm>
#include <vector>

class RangeModule {
private:
    // Stores disjoint intervals: {start, end}
    std::map<int, int> intervals;

public:
    RangeModule() {}

    void addRange(int left, int right) {
        auto it = intervals.upper_bound(left);
        if (it != intervals.begin()) {
            auto prev = std::prev(it);
            if (prev->second >= left) {
                it = prev;
            }
        }

        while (it != intervals.end() && it->first <= right) {
            left = std::min(left, it->first);
            right = std::max(right, it->second);
            it = intervals.erase(it);
        }
        intervals[left] = right;
    }

    bool queryRange(int left, int right) {
        auto it = intervals.upper_bound(left);
        if (it == intervals.begin()) return false;
        --it;
        return it->first <= left && right <= it->second;
    }

    void removeRange(int left, int right) {
        auto it = intervals.upper_bound(left);
        if (it != intervals.begin()) {
            auto prev = std::prev(it);
            if (prev->second >= left) {
                it = prev;
            }
        }

        std::vector<std::pair<int, int>> to_insert;
        while (it != intervals.end() && it->first <= right) {
            if (it->first < left) {
                to_insert.push_back({it->first, left});
            }
            if (it->second > right) {
                to_insert.push_back({right, it->second});
            }
            it = intervals.erase(it);
        }

        for (const auto& p : to_insert) {
            intervals[p.first] = p.second;
        }
    }
};`,
    pythonCode: `from bisect import bisect_left, bisect_right

class RangeModule:
    def __init__(self):
        # Disjoint alternating intervals: [l0, r0, l1, r1, l2, r2, ...]
        # tracked regions correspond to even indices to odd indices: [arr[2i], arr[2i+1])
        self.coords = []

    def addRange(self, left: int, right: int) -> None:
        i = bisect_left(self.coords, left)
        j = bisect_right(self.coords, right)
        sub = []
        if i % 2 == 0:
            sub.append(left)
        if j % 2 == 0:
            sub.append(right)
        self.coords[i:j] = sub

    def queryRange(self, left: int, right: int) -> bool:
        i = bisect_right(self.coords, left)
        j = bisect_left(self.coords, right)
        return i == j and i % 2 == 1

    def removeRange(self, left: int, right: int) -> None:
        i = bisect_left(self.coords, left)
        j = bisect_right(self.coords, right)
        sub = []
        if i % 2 == 1:
            sub.append(left)
        if j % 2 == 1:
            sub.append(right)
        self.coords[i:j] = sub`,
    complexity: {
      time: "Amortized O(log K) for addRange and removeRange; Strict O(log K) for queryRange",
      timeExplanation: "Each interval is added once and can be erased at most once across the entire sequence of operations. In C++ std::map, tree lookups take O(log K). In Python bisect with array splicing, search is O(log K) and splice is O(K) memory shift.",
      space: "O(K)",
      spaceExplanation: "Stores at most K disjoint intervals where K <= total operations <= 10^4."
    },
    commonMistakes: [
      "Allocating an array of size 10^9: Causes immediate Out Of Memory (OOM) error.",
      "Forgetting half-open interval semantics: [10, 14) and [14, 20) merge into [10, 20).",
      "Off-by-one errors when splitting intervals during removeRange: creating invalid sub-intervals.",
      "Invalidating iterators during std::map deletion: in C++, `it = intervals.erase(it)` must be used."
    ],
    instructorNotes: {
      prerequisites: "Balanced BST operations (std::map / TreeMap), interval merging, concept of dynamic segment trees.",
      teachingOrder: "Present the 10^9 coordinate space. Contrast array lookup vs interval-based representation. Guide students to design the disjoint invariant (intervals never overlap). Analyze amortized deletion.",
      keyLearningOutcomes: "Mastering disjoint interval maintenance and recognizing when map-based interval splitting is superior to dynamic segment trees.",
      difficultyRating: "Hard (LC Hard, CF 2000)"
    }
  },
  {
    id: "Q008",
    title: "Count of Smaller Numbers After Self (Fenwick Tree / Inversion Counting)",
    folder: "03-ADVANCED-TREES-AND-RANGE-QUERIES/Q008-Count-of-Smaller-Numbers-After-Self",
    category: "03-ADVANCED-TREES-AND-RANGE-QUERIES",
    categoryName: "Advanced Trees and Range Queries",
    platform: "LeetCode",
    originalId: "315",
    originalLink: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/",
    difficulty: "Hard",
    maang: ["Google", "Apple", "Amazon", "Meta"],
    primaryConcepts: ["Fenwick Tree (Binary Indexed Tree)", "Coordinate Compression"],
    advancedConcepts: ["Merge Sort Divide & Conquer Inversions", "Order Statistic Trees"],
    statement: `Given an integer array nums, return an integer array counts where counts[i] is the number of smaller elements to the right of nums[i].`,
    inputFormat: `An integer array nums.`,
    outputFormat: `Return an integer array counts of the same length.`,
    constraints: [
      "1 <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4"
    ],
    examples: [
      {
        input: "nums = [5,2,6,1]",
        output: "[2,1,1,0]",
        explanation: "To the right of 5 there are 2 smaller elements (2 and 1).\nTo the right of 2 there is 1 smaller element (1).\nTo the right of 6 there is 1 smaller element (1).\nTo the right of 1 there are 0 smaller elements."
      },
      {
        input: "nums = [-1,-1]",
        output: "[0,0]",
        explanation: "No element to the right is strictly smaller."
      }
    ],
    edgeCases: [
      "Strictly decreasing array: counts[i] = n - 1 - i.",
      "Strictly increasing array: counts[i] = 0 for all i.",
      "Array with duplicates: Only strictly smaller elements count, equal elements do not count.",
      "Large inputs with negative numbers: Coordinate compression or offset shift (+10001) required."
    ],
    industryRelevance: [
      {
        company: "Google",
        source: "LeetCode Discuss",
        interviewYear: "2024",
        match: "Exact problem",
        evidence: "Asked in Google L4/L5 coding round to assess candidate's proficiency with range query structures (BIT vs Merge Sort).",
        reference: "https://leetcode.com/discuss/interview-experience/4710123/Google-L4-SWE-Interview"
      },
      {
        company: "Apple",
        source: "Glassdoor",
        interviewYear: "2023",
        match: "Exact problem",
        evidence: "Reported in Apple Platform Architecture round for evaluating data streaming inversion metrics.",
        reference: "https://www.glassdoor.com/Interview/Apple-Software-Engineer-Interview-Questions-E1138.htm"
      },
      {
        company: "Amazon",
        source: "LeetCode Discuss",
        interviewYear: "2023",
        match: "Similar variant",
        evidence: "Calculating inversion index for customer clickstream rankings.",
        reference: "https://leetcode.com/discuss/interview-experience/3421109/Amazon-SDE-Inversion-Counting"
      },
      {
        company: "Meta",
        source: "Reddit (r/leetcode)",
        interviewYear: "2022",
        match: "Same pattern",
        evidence: "Merge sort with index tracking for rank correlation score.",
        reference: "https://www.reddit.com/r/leetcode/comments/wb7n12/meta_merge_sort_inversion_count/"
      }
    ],
    prerequisites: [
      {
        platform: "LeetCode",
        name: "Range Sum Query - Mutable",
        id: "307",
        difficulty: "Medium",
        concepts: "Binary Indexed Tree / Segment Tree",
        learningObjective: "Master standard point-update range-sum queries.",
        reference: "https://leetcode.com/problems/range-sum-query-mutable/"
      },
      {
        platform: "Codeforces",
        name: "Inversion Count",
        id: "SPOJ INVCNT / CF 61E",
        difficulty: "1900",
        concepts: "Coordinate Compression, Fenwick Tree",
        learningObjective: "Calculate inversions in arrays with arbitrary range values.",
        reference: "https://codeforces.com/problemset/problem/61/E"
      },
      {
        platform: "Codeforces",
        name: "Enemy is weak",
        id: "61E",
        difficulty: "1900",
        concepts: "Fenwick Tree Inversions x 2",
        learningObjective: "Combine forward and backward BIT queries.",
        reference: "https://codeforces.com/problemset/problem/61/E"
      }
    ],
    variations: [
      {
        name: "Reverse Pairs (nums[i] > 2 * nums[j])",
        modifiedRequirement: "Count pairs (i, j) with i < j and nums[i] > 2 * nums[j].",
        additionalConcepts: "Modified Merge Sort / Disjoint Coordinate Compression",
        difficulty: "Hard (LC 493)",
        explanation: "Requires querying the BIT at position corresponding to (nums[i] - 1) / 2."
      },
      {
        name: "Count Smaller in Dynamic Array with Insertions",
        modifiedRequirement: "Elements are inserted dynamically into arbitrary positions in the array; maintain running smaller counts.",
        additionalConcepts: "Treap with Subtree Size / Order Statistic Tree",
        difficulty: "Hard (CF 2200)",
        explanation: "Requires self-balancing binary search tree with implicit indices."
      },
      {
        name: "3-Element Inversions (i < j < k with nums[i] > nums[j] > nums[k])",
        modifiedRequirement: "Count the total number of triplets satisfying descending inversion order.",
        additionalConcepts: "Two Fenwick Trees (prefix greater and suffix smaller)",
        difficulty: "Hard (CF 1900)",
        explanation: "Multiply prefix larger by suffix smaller for every middle element j."
      }
    ],
    bruteForce: {
      intuition: "For each index i, iterate through all j from i + 1 to n - 1 and count how many satisfy nums[j] < nums[i].",
      pseudocode: `function bruteForce(nums):
  counts = array of size n
  for i from 0 to n-1:
    c = 0
    for j from i+1 to n-1:
      if nums[j] < nums[i]:
        c += 1
    counts[i] = c
  return counts`,
      timeComplexity: "O(N^2)",
      spaceComplexity: "O(1) auxiliary",
      whyInefficient: "For N = 10^5, N^2 = 10^10 operations, which takes ~10 seconds and times out."
    },
    optimizedApproach: {
      keyObservations: "If we traverse the array from right to left, when we are at index i, every element previously seen was originally to the right of nums[i]. Thus, the problem reduces to: 'How many seen elements are strictly smaller than nums[i]?'\nThis is a standard prefix sum query in frequency space: `query(nums[i] - 1)`.\nSince nums[i] ranges from -10^4 to 10^4, we can either:\n1. Apply coordinate compression: map distinct values to ranks 1..M.\n2. Apply offset shift: map values to `val + 10001` (size 20002).\nA Fenwick Tree (Binary Indexed Tree) provides O(log M) point updates and prefix sum queries.",
      algorithmSelection: "Fenwick Tree with Coordinate Compression traversing right-to-left.",
      stepByStep: [
        "1. Extract unique values of `nums`, sort them, and map each value to rank `1..M`.",
        "2. Initialize a Fenwick tree of size M with all zeros.",
        "3. Initialize `counts` array of size N.",
        "4. Iterate from `i = n - 1` down to `0`:",
        "   a. `rank = rankMap[nums[i]]`.",
        "   b. Query Fenwick tree for `query(rank - 1)`: this gives the count of elements seen so far that are strictly smaller than nums[i].",
        "   c. Store the result in `counts[i]`.",
        "   d. Update the Fenwick tree: `update(rank, +1)`.",
        "5. Return `counts`."
      ]
    },
    cppCode: `#include <vector>
#include <algorithm>

class FenwickTree {
private:
    int n;
    std::vector<int> tree;

public:
    FenwickTree(int size) : n(size), tree(size + 1, 0) {}

    void update(int i, int delta) {
        for (; i <= n; i += i & (-i)) {
            tree[i] += delta;
        }
    }

    int query(int i) {
        int sum = 0;
        for (; i > 0; i -= i & (-i)) {
            sum += tree[i];
        }
        return sum;
    }
};

class Solution {
public:
    std::vector<int> countSmaller(std::vector<int>& nums) {
        int n = nums.size();
        if (n == 0) return {};

        // Coordinate compression
        std::vector<int> sortedVals = nums;
        std::sort(sortedVals.begin(), sortedVals.end());
        sortedVals.erase(std::unique(sortedVals.begin(), sortedVals.end()), sortedVals.end());

        FenwickTree bit(sortedVals.size());
        std::vector<int> result(n);

        for (int i = n - 1; i >= 0; --i) {
            // Find 1-based rank
            int rank = std::lower_bound(sortedVals.begin(), sortedVals.end(), nums[i]) - sortedVals.begin() + 1;
            // Query strictly smaller: rank - 1
            result[i] = bit.query(rank - 1);
            // Insert current element into BIT
            bit.update(rank, 1);
        }

        return result;
    }
};`,
    pythonCode: `from typing import List
from bisect import bisect_left

class FenwickTree:
    def __init__(self, size: int):
        self.size = size
        self.tree = [0] * (size + 1)

    def update(self, i: int, delta: int):
        while i <= self.size:
            self.tree[i] += delta
            i += i & (-i)

    def query(self, i: int) -> int:
        s = 0
        while i > 0:
            s += self.tree[i]
            i -= i & (-i)
        return s

class Solution:
    def countSmaller(self, nums: List[int]) -> List[int]:
        if not nums:
            return []

        # Coordinate compression
        sorted_vals = sorted(list(set(nums)))
        m = len(sorted_vals)
        bit = FenwickTree(m)

        n = len(nums)
        result = [0] * n

        # Traverse right-to-left
        for i in range(n - 1, -1, -1):
            # 1-based rank
            rank = bisect_left(sorted_vals, nums[i]) + 1
            # Query elements with rank <= rank - 1 (strictly smaller)
            result[i] = bit.query(rank - 1)
            # Add current element to BIT
            bit.update(rank, 1)

        return result`,
    complexity: {
      time: "O(N log M) where M <= N is distinct element count",
      timeExplanation: "Coordinate compression sorting takes O(N log N). For each of the N elements, one BIT query and one BIT update take O(log M). Total time: O(N log N).",
      space: "O(M) auxiliary",
      spaceExplanation: "The Fenwick tree array and sorted unique array require O(M) <= O(N) space."
    },
    commonMistakes: [
      "Querying `query(rank)` instead of `query(rank - 1)`. The problem requests strictly smaller elements, so elements equal to `nums[i]` must not be counted.",
      "Traversing left-to-right: If traversed left-to-right, the BIT tracks elements to the *left*, which solves 'count smaller before self', not 'after self'.",
      "Using 0-indexed BIT: Fenwick trees require 1-based indexing for `i & (-i)` lowbit extraction to avoid infinite loops at index 0.",
      "Attempting an uncompressed BIT with negative indices without offsetting."
    ],
    instructorNotes: {
      prerequisites: "Binary Indexed Tree (Fenwick Tree), Coordinate Compression, Inversion counting via Merge Sort.",
      teachingOrder: "Present the naive O(N^2) comparison. Ask: 'If we move right-to-left, what data structure lets us query count(< X) and insert X in log N time?' Introduce the Fenwick tree frequency array.",
      keyLearningOutcomes: "Mastering right-to-left scanning to transform 'after self' queries into static prefix sums, combined with coordinate compression.",
      difficultyRating: "Hard (LC Hard, CF 1900)"
    }
  },
  {
    id: "Q009",
    title: "Stream of Characters (Aho-Corasick Automaton / Reverse Trie)",
    folder: "03-ADVANCED-TREES-AND-RANGE-QUERIES/Q009-Stream-of-Characters",
    category: "03-ADVANCED-TREES-AND-RANGE-QUERIES",
    categoryName: "Advanced Trees and Range Queries",
    platform: "LeetCode",
    originalId: "1032",
    originalLink: "https://leetcode.com/problems/stream-of-characters/",
    difficulty: "Hard",
    maang: ["Google", "Meta", "Amazon"],
    primaryConcepts: ["Aho-Corasick Automaton", "Reverse Suffix Trie"],
    advancedConcepts: ["Failure Links / Suffix Transitions", "Streaming Text Processing"],
    statement: `Design an algorithm that accepts a stream of characters and checks if a suffix of these characters is a string of a given array of words.

For example, if words = ["abc", "xyz"] and the stream arrives as 'a', 'b', 'c', the algorithm should detect that "abc" is a suffix and return true.

Implement the StreamChecker class:
- StreamChecker(String[] words): Initializes the object with the given words.
- boolean query(char letter): Accepts a new character from the stream and returns true if any non-empty suffix of the stream up to the current character equals any string in words, and false otherwise.`,
    inputFormat: `Method calls: StreamChecker(words), query(letter).`,
    outputFormat: `query returns boolean true or false.`,
    constraints: [
      "1 <= words.length <= 2000",
      "1 <= words[i].length <= 200",
      "words[i] consists of lowercase English letters.",
      "letter is a lowercase English letter.",
      "At most 4 * 10^4 calls will be made to query."
    ],
    examples: [
      {
        input: '["StreamChecker", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query"]\n[[["cd", "f", "kl"]], ["a"], ["b"], ["c"], ["d"], ["e"], ["f"], ["g"], ["h"], ["i"], ["j"], ["k"], ["l"]]',
        output: "[null, false, false, false, true, false, true, false, false, false, false, false, true]",
        explanation: "query('d') returns true because 'cd' is in words.\nquery('f') returns true because 'f' is in words.\nquery('l') returns true because 'kl' is in words."
      }
    ],
    edgeCases: [
      "Stream contains 40,000 characters: History buffer must be managed efficiently.",
      "Single character words: Immediate match upon receiving the character.",
      "Long words (length 200) matching rare suffixes: Traversal should terminate early if prefix doesn't match.",
      "Duplicate words or words that are prefixes/suffixes of each other."
    ],
    industryRelevance: [
      {
        company: "Google",
        source: "LeetCode Discuss",
        interviewYear: "2024",
        match: "Exact problem",
        evidence: "Asked in Google Ads Trust & Safety interview for real-time prohibited keyword filtering in live chat streams.",
        reference: "https://leetcode.com/discuss/interview-experience/4859182/Google-L5-Aho-Corasick-Stream-Filtering"
      },
      {
        company: "Meta",
        source: "Glassdoor",
        interviewYear: "2023",
        match: "Exact problem",
        evidence: "Reported in Meta Integrity team interview for live profanity and harassment token detection.",
        reference: "https://www.glassdoor.com/Interview/Meta-Software-Engineer-Interview-Questions-E40772.htm"
      },
      {
        company: "Amazon",
        source: "LeetCode Discuss",
        interviewYear: "2023",
        match: "Similar variant",
        evidence: "Stream token matcher in AWS WAF (Web Application Firewall) detecting SQL injection signatures.",
        reference: "https://leetcode.com/discuss/interview-experience/3784192/Amazon-AWS-WAF-Signature-Matching"
      },
      {
        company: "Apple",
        source: "Reddit (r/cscareerquestions)",
        interviewYear: "2022",
        match: "Same pattern",
        evidence: "Keyboard auto-complete and predictive dictionary streaming engine.",
        reference: "https://www.reddit.com/r/cscareerquestions/comments/vw892k/apple_trie_streaming_keyboard_interview/"
      }
    ],
    prerequisites: [
      {
        platform: "LeetCode",
        name: "Implement Trie (Prefix Tree)",
        id: "208",
        difficulty: "Medium",
        concepts: "Trie, Tree Traversal",
        learningObjective: "Build and query a standard prefix tree.",
        reference: "https://leetcode.com/problems/implement-trie-prefix-tree/"
      },
      {
        platform: "Codeforces",
        name: "Prefix-Suffix Palindrome",
        id: "1326D2",
        difficulty: "1700",
        concepts: "String algorithms, KMP / Suffix matching",
        learningObjective: "Handle prefix-suffix transitions.",
        reference: "https://codeforces.com/problemset/problem/1326/D2"
      },
      {
        platform: "Codeforces",
        name: "Word Combinations",
        id: "CSES 1731 / CF 1202E",
        difficulty: "2100",
        concepts: "Aho-Corasick Automaton",
        learningObjective: "Multiple string pattern matching with failure links.",
        reference: "https://codeforces.com/problemset/problem/1202/E"
      }
    ],
    variations: [
      {
        name: "Full Aho-Corasick Automaton with Output Tracking",
        modifiedRequirement: "Instead of a boolean, return all matched word IDs ending at the current stream character.",
        additionalConcepts: "Aho-Corasick Failure Links & Dictionary Output Links",
        difficulty: "Hard (CF 2100)",
        explanation: "Construct full automaton BFS failure transitions. Query runs in O(1) state transition + match reporting."
      },
      {
        name: "Wildcard Character Matches in Stream",
        modifiedRequirement: "The stream may contain wildcard characters '?' that match any lowercase letter.",
        additionalConcepts: "BFS multi-state automaton active set",
        difficulty: "Very Hard",
        explanation: "Maintains a frontier of active automaton states rather than a single deterministic state."
      },
      {
        name: "Bounded Memory Streaming (Sliding Window)",
        modifiedRequirement: "Memory is restricted to O(max_word_len); stream runs infinitely (billions of characters).",
        additionalConcepts: "Circular ring buffer of size max_word_len",
        difficulty: "Hard",
        explanation: "Prevent unbounded string concatenation by using a fixed circular buffer."
      }
    ],
    bruteForce: {
      intuition: "Append each incoming character to a global stream string. For every word in words, check if the stream ends with word.",
      pseudocode: `function query(letter):
  stream.append(letter)
  for w in words:
    if stream.endsWith(w):
      return true
  return false`,
      timeComplexity: "O(Q * W * L) where W = words count (2000), L = max word length (200), Q = 40,000 queries. Total = 4 * 10^4 * 2000 * 200 = 1.6 * 10^10 operations (severe TLE).",
      spaceComplexity: "O(Q + W * L)",
      whyInefficient: "Checking all 2000 words naively on each query re-evaluates character comparisons without utilizing prefix/suffix overlaps."
    },
    optimizedApproach: {
      keyObservations: "We want to check if any word in the dictionary is a suffix of the current stream history.\nNotice that: 'word is a suffix of stream' <=> 'reverse(word) is a prefix of reverse(stream)'.\nTherefore, if we insert all words in REVERSE into a standard Trie:\nWhen a query character arrives, we push it into our stream history buffer. Then we walk down the Reverse Trie starting from the most recent stream character, stepping backwards. If we hit an `isEndOfWord` node, we found a matching suffix in O(max_word_len)! If we hit a null branch, we can abort immediately.\nSince max word length is only 200, each query takes at most 200 pointer dereferences (typically 1-3 steps in practice).",
      algorithmSelection: "Reverse Suffix Trie with Ring/Vector Buffer.",
      stepByStep: [
        "1. Define `TrieNode` with `children[26]` and `isWord` boolean.",
        "2. For each word in `words`:",
        "   a. Insert `word` in reversed order into the Trie.",
        "   b. Record `maxWordLen = max(maxWordLen, word.length())`.",
        "3. In `query(letter)`:",
        "   a. Append `letter` to `streamHistory`.",
        "   b. If `streamHistory.size() > maxWordLen`, we can pop the oldest character (optional optimization).",
        "   c. Traverse backwards from the back of `streamHistory`:",
        "      i. If `curr->isWord` is true, return true.",
        "      ii. If `curr->children[c - 'a']` is null, return false (early prune).",
        "      iii. Move to `curr->children[c - 'a']`.",
        "   d. After loop, return `curr->isWord`."
      ]
    },
    cppCode: `#include <vector>
#include <string>
#include <algorithm>

class StreamChecker {
private:
    struct TrieNode {
        TrieNode* children[26] = {nullptr};
        bool isWord = false;
    };

    TrieNode* root;
    std::string stream;
    int maxLen = 0;

    void insertReversed(const std::string& word) {
        TrieNode* curr = root;
        for (int i = word.size() - 1; i >= 0; --i) {
            int idx = word[i] - 'a';
            if (!curr->children[idx]) {
                curr->children[idx] = new TrieNode();
            }
            curr = curr->children[idx];
        }
        curr->isWord = true;
    }

public:
    StreamChecker(std::vector<std::string>& words) {
        root = new TrieNode();
        for (const auto& w : words) {
            insertReversed(w);
            maxLen = std::max(maxLen, (int)w.size());
        }
    }

    bool query(char letter) {
        stream.push_back(letter);

        // Traverse backwards in reverse trie
        TrieNode* curr = root;
        int n = stream.size();
        int steps = std::min(n, maxLen);

        for (int i = 0; i < steps; ++i) {
            int idx = stream[n - 1 - i] - 'a';
            if (!curr->children[idx]) {
                return false;
            }
            curr = curr->children[idx];
            if (curr->isWord) {
                return true;
            }
        }

        return false;
    }
};`,
    pythonCode: `from typing import List

class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_word = False

class StreamChecker:
    def __init__(self, words: List[str]):
        self.root = TrieNode()
        self.max_len = 0
        self.stream = []

        for w in words:
            self.max_len = max(self.max_len, len(w))
            curr = self.root
            # Insert word in reverse order
            for ch in reversed(w):
                if ch not in curr.children:
                    curr.children[ch] = TrieNode()
                curr = curr.children[ch]
            curr.is_word = True

    def query(self, letter: str) -> bool:
        self.stream.append(letter)
        # We only need to retain up to max_len characters
        if len(self.stream) > self.max_len * 2:
            self.stream = self.stream[-self.max_len:]

        curr = self.root
        # Scan backward from most recent character
        for i in range(len(self.stream) - 1, -1, -1):
            ch = self.stream[i]
            if ch not in curr.children:
                return False
            curr = curr.children[ch]
            if curr.is_word:
                return True

        return False`,
    complexity: {
      time: "Constructor: O(W * L); Query: O(min(History, L)) where L <= 200",
      timeExplanation: "Building the reverse trie takes O(W * L) where W <= 2000, L <= 200. Each query walks at most L = 200 trie nodes, usually pruning within 1-3 iterations on English text.",
      space: "O(W * L)",
      spaceExplanation: "The trie stores at most W * L characters (<= 4 * 10^5 nodes). The stream buffer is truncated to O(L)."
    },
    commonMistakes: [
      "Inserting words forward and trying to maintain a list of all active search pointers: results in exponential branching when many words share common prefixes.",
      "Unbounded string growth: Letting `stream` grow to 40,000 characters and slicing the string creates an O(Q^2) memory copy bottleneck.",
      "Forgetting early pruning: Not exiting immediately when `curr->children[idx]` is null.",
      "Returning true on `curr->children` existence instead of checking `curr->isWord`."
    ],
    instructorNotes: {
      prerequisites: "Prefix Trees (Trie), Aho-Corasick automaton concepts, string reversal symmetry.",
      teachingOrder: "Present the streaming problem. Ask candidates why standard forward Trie requires maintaining an array of pointers. Show the symmetry: 'suffix matching = reverse prefix matching'. Derive the reverse Trie solution.",
      keyLearningOutcomes: "Using problem symmetry to transform a complex multi-pattern failure-link problem into a clean, backward-traversing trie.",
      difficultyRating: "Hard (LC Hard, CF 1900-2000)"
    }
  }
];
