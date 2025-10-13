const navLinks = [
    { name: "Dự án", link: "#work" },
    { name: "Kinh nghiệm", link: "#experience" },
    { name: "Kỹ năng", link: "#skills" },
    { name: "Blog", link: "#blog" },
    { name: "Liên hệ", link: "#contact" },
];
const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 4, suffix: "+", label: "Năm đại học" },
    { value: 10, suffix: "+", label: "Dự án học tập & cá nhân" },
    { value: 5, suffix: "+", label: "Dự án nhóm thực hiện" },
    { value: 100, suffix: "%", label: "Tinh thần học hỏi & phát triển" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Tinh thần học hỏi",
        desc: "Luôn sẵn sàng tiếp thu kiến thức mới và chủ động nâng cao kỹ năng lập trình qua dự án thực tế.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Giao tiếp & làm việc nhóm",
        desc: "Trao đổi rõ ràng, tích cực hợp tác trong các dự án nhóm để hoàn thành mục tiêu chung hiệu quả.",
    },
    {
        imgPath: "/images/time.png",
        title: "Trách nhiệm & đúng tiến độ",
        desc: "Luôn cố gắng hoàn thành công việc đúng thời hạn và đảm bảo chất lượng trong từng nhiệm vụ được giao.",
    },
];


const techStackImgs = [
    { name: "ReactJS", imgPath: "/images/logos/react.png" },
    { name: "Python", imgPath: "/images/logos/python.svg" },
    { name: "NodeJS", imgPath: "/images/logos/node.png" },
    { name: "Three.js", imgPath: "/images/logos/three.png" },
    { name: "Git & Quản lý dự án", imgPath: "/images/logos/git.svg" },
];

const techStackIcons = [
    {
        name: "ReactJS",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "NodeJS",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Three.js",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Git & Quản lý dự án",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review:
            "Đạt đã thể hiện tinh thần học hỏi nhanh và khả năng làm việc độc lập tốt trong các dự án học tập. Cậu ấy luôn chủ động tìm cách tối ưu mã nguồn và hỗ trợ nhóm khi cần.",
        imgPath: "/images/exp1.png",
        logoPath: "/images/logo1.png",
        title: "Thực tập sinh Frontend",
        date: "06/2024 – 09/2024",
        responsibilities: [
            "Học và áp dụng ReactJS vào xây dựng giao diện web.",
            "Thực hành làm việc nhóm với Git và quản lý task qua Trello.",
            "Tối ưu trải nghiệm người dùng dựa trên phản hồi từ mentor.",
        ],
    },
    {
        review:
            "Trong các dự án môn học, Đạt luôn là người chủ động xây dựng cấu trúc mã và tìm kiếm giải pháp hợp lý. Kỹ năng làm việc nhóm của cậu ấy tiến bộ rõ rệt qua từng kỳ học.",
        imgPath: "/images/exp2.png",
        logoPath: "/images/logo2.png",
        title: "Dự án học phần Web nâng cao",
        date: "09/2024 – 12/2024",
        responsibilities: [
            "Thiết kế và phát triển website bán hàng mini bằng C# và SQLServer.",
            "Triển khai hệ thống đăng nhập và quản lý sản phẩm cơ bản.",
            "Thuyết trình và báo cáo nhóm về kiến trúc dự án.",
        ],
    },
    {
        review:
            "Đạt là sinh viên có đam mê với công nghệ, ham học hỏi và có tinh thần cầu tiến. Cậu ấy đã thể hiện năng lực tự học tốt trong các dự án cá nhân.",
        imgPath: "/images/exp3.png",
        logoPath: "/images/logo3.png",
        title: "Dự án cá nhân – Portfolio Website",
        date: "01/2025 – Hiện tại",
        responsibilities: [
            "Tự thiết kế và lập trình website cá nhân bằng React và TailwindCSS.",
            "Tích hợp hiệu ứng 3D bằng Three.js để tăng tính tương tác.",
            "Triển khai website trên Vercel để chia sẻ với nhà tuyển dụng.",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const testimonials = [
    {
        name: "Giảng viên hướng dẫn",
        mentions: "@mentor",
        review:
            "Đạt là sinh viên chăm chỉ, có tinh thần cầu tiến và nghiêm túc trong học tập. Luôn hoàn thành tốt các nhiệm vụ được giao trong đồ án và bài tập nhóm.",
        imgPath: "/images/client1.png",
    },
    {
        name: "Bạn cùng nhóm",
        mentions: "@teammate",
        review:
            "Làm việc với Đạt rất dễ chịu. Bạn ấy luôn hỗ trợ và giữ tinh thần tích cực trong nhóm, đặc biệt là trong những giai đoạn áp lực của dự án.",
        imgPath: "/images/client2.png",
    },
    {
        name: "Người hướng dẫn thực tập",
        mentions: "@internmentor",
        review:
            "Trong kỳ thực tập, Đạt đã thể hiện thái độ học hỏi tốt và khả năng nắm bắt công nghệ nhanh. Cậu ấy có tiềm năng phát triển thành một lập trình viên giỏi trong tương lai.",
        imgPath: "/images/client3.png",
    },
];

const socialImgs = [
    {
        name: "insta",
        url: "https://www.instagram.com/",
        imgPath: "/images/insta.png",
    },
    {
        name: "fb",
        url: "https://www.facebook.com/",
        imgPath: "/images/fb.png",
    },
    {
        name: "x",
        url: "https://www.x.com/",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/",
        imgPath: "/images/linkedin.png",
    },
];

const blogPosts = [
    {
        id: 1,
        title: "Hiểu rõ về Java Collections Framework",
        excerpt: "Khám phá các cấu trúc dữ liệu quan trọng trong Java như ArrayList, HashMap, HashSet và cách sử dụng chúng hiệu quả trong dự án thực tế.",
        date: "15/09/2024",
        category: "Java",
        readTime: "8 phút đọc",
        tags: ["Java", "Collections", "Data Structures"],
        content: `
## Giới thiệu

Java Collections Framework là một kiến trúc thống nhất để lưu trữ và thao tác các nhóm đối tượng. Framework này cung cấp các interface (Set, List, Queue, Map) và các implementation classes (ArrayList, LinkedList, HashSet, HashMap, TreeSet, TreeMap...).

## Các Interface Chính

### 1. List Interface
List là một collection có thứ tự (ordered collection). Cho phép duplicate elements và truy cập theo index.

**ArrayList vs LinkedList:**
- ArrayList: Tốt cho random access, chậm khi insert/delete ở giữa
- LinkedList: Nhanh khi insert/delete, chậm khi random access

\`\`\`java
List<String> arrayList = new ArrayList<>();
arrayList.add("Java");
arrayList.add("Python");
arrayList.add("JavaScript");

// Truy cập phần tử
String lang = arrayList.get(0); // "Java"
\`\`\`

### 2. Set Interface
Set không cho phép duplicate elements. Các implementation phổ biến:

**HashSet:**
\`\`\`java
Set<Integer> numbers = new HashSet<>();
numbers.add(1);
numbers.add(2);
numbers.add(1); // Sẽ bị ignore (duplicate)
// Kết quả: [1, 2]
\`\`\`

### 3. Map Interface
Map lưu trữ dữ liệu dưới dạng key-value pairs.

**HashMap Example:**
\`\`\`java
Map<String, Integer> ages = new HashMap<>();
ages.put("John", 25);
ages.put("Alice", 30);
ages.put("Bob", 28);

int johnAge = ages.get("John"); // 25
\`\`\`

## Best Practices

1. **Chọn đúng collection:** Sử dụng interface type khi khai báo
2. **Initial capacity:** Set capacity ban đầu nếu biết size
3. **Immutability:** Sử dụng \`Collections.unmodifiableList()\` khi cần
4. **Thread-safety:** Dùng \`ConcurrentHashMap\` cho multi-threaded environment

## Kết luận

Hiểu rõ Collections Framework giúp bạn viết code hiệu quả và dễ maintain hơn. Hãy chọn đúng collection cho từng use case!
        `
    },
    {
        id: 2,
        title: "JavaScript ES6+: Arrow Functions và This Context",
        excerpt: "Tìm hiểu cách arrow functions hoạt động khác với function thông thường, đặc biệt về lexical this binding và khi nào nên sử dụng.",
        date: "10/09/2024",
        category: "JavaScript",
        readTime: "6 phút đọc",
        tags: ["JavaScript", "ES6", "Functions"],
        content: `
## Arrow Functions là gì?

Arrow functions là cú pháp ngắn gọn hơn để viết function expressions trong JavaScript, được giới thiệu trong ES6.

## Cú pháp cơ bản

\`\`\`javascript
// Function thông thường
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Với một parameter
const square = x => x * x;

// Với function body
const greet = (name) => {
  const message = \`Hello, \${name}!\`;
  return message;
};
\`\`\`

## Sự khác biệt quan trọng: This Binding

Đây là điểm khác biệt lớn nhất! Arrow function không có \`this\` riêng, nó sử dụng \`this\` từ scope cha (lexical this).

### Ví dụ với Regular Function:
\`\`\`javascript
const person = {
  name: 'John',
  hobbies: ['coding', 'reading'],
  printHobbies: function() {
    this.hobbies.forEach(function(hobby) {
      console.log(\`\${this.name} likes \${hobby}\`);
      // Error! this.name là undefined
    });
  }
};
\`\`\`

### Ví dụ với Arrow Function:
\`\`\`javascript
const person = {
  name: 'John',
  hobbies: ['coding', 'reading'],
  printHobbies: function() {
    this.hobbies.forEach(hobby => {
      console.log(\`\${this.name} likes \${hobby}\`);
      // Works! Arrow function kế thừa this từ printHobbies
    });
  }
};
\`\`\`

## Khi nào nên dùng Arrow Functions?

✅ **Nên dùng:**
- Callbacks (array methods, setTimeout, event handlers)
- Khi muốn preserve context của \`this\`
- Function expressions ngắn gọn

❌ **Không nên dùng:**
- Methods của object (nếu cần truy cập \`this\`)
- Constructor functions
- Khi cần \`arguments\` object

## Kết luận

Arrow functions làm code ngắn gọn và giải quyết vấn đề \`this\` binding. Hiểu rõ sự khác biệt giúp bạn chọn đúng syntax!
        `
    },
    {
        id: 3,
        title: "Spring Boot: Xây dựng RESTful API từ đầu",
        excerpt: "Hướng dẫn chi tiết cách tạo một RESTful API với Spring Boot, bao gồm các annotations quan trọng và best practices.",
        date: "05/09/2024",
        category: "Java",
        readTime: "12 phút đọc",
        tags: ["Java", "Spring Boot", "REST API"],
        content: `
## Giới thiệu Spring Boot

Spring Boot là framework mạnh mẽ giúp đơn giản hóa việc phát triển ứng dụng Java, đặc biệt là RESTful APIs. Với cấu hình tự động và embedded server, bạn có thể tạo một API hoàn chỉnh trong vài phút.

## Setup Project

### 1. Tạo Project với Spring Initializr

Truy cập [start.spring.io](https://start.spring.io) và chọn:
- **Project**: Maven
- **Language**: Java
- **Spring Boot**: 3.2.x (latest stable)
- **Dependencies**: 
  - Spring Web
  - Spring Data JPA
  - H2 Database (for testing)
  - Lombok

### 2. Cấu trúc Project

\`\`\`
src/main/java/com/example/api/
├── controller/
│   └── UserController.java
├── model/
│   └── User.java
├── repository/
│   └── UserRepository.java
├── service/
│   └── UserService.java
└── ApiApplication.java
\`\`\`

## Tạo Entity Model

\`\`\`java
@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(unique = true, nullable = false)
    private String email;
    
    private Integer age;
}
\`\`\`

## Tạo Repository

\`\`\`java
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    List<User> findByAgeGreaterThan(Integer age);
}
\`\`\`

## Tạo Service Layer

\`\`\`java
@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    
    public User getUserById(Long id) {
        return userRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("User not found"));
    }
    
    public User createUser(User user) {
        return userRepository.save(user);
    }
    
    public User updateUser(Long id, User userDetails) {
        User user = getUserById(id);
        user.setName(userDetails.getName());
        user.setEmail(userDetails.getEmail());
        user.setAge(userDetails.getAge());
        return userRepository.save(user);
    }
    
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
\`\`\`

## Tạo REST Controller

\`\`\`java
@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    
    // GET all users
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }
    
    // GET user by ID
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getUserById(id));
    }
    
    // POST create user
    @PostMapping
    public ResponseEntity<User> createUser(@Valid @RequestBody User user) {
        User savedUser = userService.createUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
    }
    
    // PUT update user
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(
        @PathVariable Long id,
        @Valid @RequestBody User user
    ) {
        return ResponseEntity.ok(userService.updateUser(id, user));
    }
    
    // DELETE user
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}
\`\`\`

## Các Annotations Quan Trọng

### Controller Annotations:
- **@RestController**: Kết hợp @Controller + @ResponseBody
- **@RequestMapping**: Định nghĩa base URL
- **@GetMapping, @PostMapping, @PutMapping, @DeleteMapping**: HTTP methods
- **@PathVariable**: Lấy giá trị từ URL path
- **@RequestBody**: Parse JSON request body
- **@Valid**: Kích hoạt validation

### Service & Repository:
- **@Service**: Đánh dấu service layer
- **@Repository**: Đánh dấu data access layer
- **@Transactional**: Quản lý transaction

## Exception Handling

\`\`\`java
@ControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleResourceNotFound(
        ResourceNotFoundException ex
    ) {
        ErrorResponse error = new ErrorResponse(
            HttpStatus.NOT_FOUND.value(),
            ex.getMessage(),
            LocalDateTime.now()
        );
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }
    
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGlobalException(Exception ex) {
        ErrorResponse error = new ErrorResponse(
            HttpStatus.INTERNAL_SERVER_ERROR.value(),
            "Internal server error",
            LocalDateTime.now()
        );
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
    }
}
\`\`\`

## Configuration (application.properties)

\`\`\`properties
# Server
server.port=8080

# Database (H2)
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.hibernate.ddl-auto=update
spring.h2.console.enabled=true

# Logging
logging.level.org.springframework.web=DEBUG
\`\`\`

## Best Practices

1. **Sử dụng DTOs**: Tách biệt entity và response object
2. **Validation**: Dùng @Valid và Bean Validation
3. **Exception Handling**: Centralized error handling với @ControllerAdvice
4. **HTTP Status Codes**: Trả đúng status code (200, 201, 404, 500...)
5. **API Versioning**: Thêm version trong URL (/api/v1/users)
6. **Documentation**: Sử dụng Swagger/OpenAPI
7. **Security**: Implement Spring Security cho authentication
8. **Pagination**: Dùng Pageable cho large datasets

## Testing API

Sử dụng Postman hoặc curl:

\`\`\`bash
# GET all users
curl http://localhost:8080/api/users

# POST create user
curl -X POST http://localhost:8080/api/users \\
  -H "Content-Type: application/json" \\
  -d '{"name":"John Doe","email":"john@example.com","age":25}'

# GET user by ID
curl http://localhost:8080/api/users/1

# PUT update user
curl -X PUT http://localhost:8080/api/users/1 \\
  -H "Content-Type: application/json" \\
  -d '{"name":"John Updated","email":"john@example.com","age":26}'

# DELETE user
curl -X DELETE http://localhost:8080/api/users/1
\`\`\`

## Kết luận

Spring Boot giúp việc xây dựng RESTful API trở nên đơn giản và nhanh chóng. Với các annotations rõ ràng và cấu hình tự động, bạn có thể tập trung vào business logic thay vì boilerplate code.

**Next Steps:**
- Thêm Spring Security cho authentication/authorization
- Implement Swagger cho API documentation
- Deploy lên cloud (Heroku, AWS, Azure)
        `
    },
    {
        id: 4,
        title: "Async/Await trong JavaScript: Viết code bất đồng bộ dễ đọc hơn",
        excerpt: "Làm chủ async/await để xử lý các tác vụ bất đồng bộ một cách rõ ràng, tránh callback hell và Promise chains phức tạp.",
        date: "28/08/2024",
        category: "JavaScript",
        readTime: "10 phút đọc",
        tags: ["JavaScript", "Async", "Promises"],
        content: `
## Tại sao cần Async/Await?

JavaScript là single-threaded, nhưng nhiều tác vụ như API calls, file operations, timers cần thời gian để hoàn thành. Async/await giúp viết asynchronous code trông giống synchronous code, dễ đọc và maintain hơn.

## Từ Callbacks đến Promises đến Async/Await

### 1. Callback Hell (Pyramid of Doom)

\`\`\`javascript
getUserData(userId, (user) => {
  getOrders(user.id, (orders) => {
    getOrderDetails(orders[0].id, (details) => {
      getShippingInfo(details.shippingId, (shipping) => {
        console.log(shipping);
        // 😱 Callback hell!
      });
    });
  });
});
\`\`\`

### 2. Promises (Better)

\`\`\`javascript
getUserData(userId)
  .then(user => getOrders(user.id))
  .then(orders => getOrderDetails(orders[0].id))
  .then(details => getShippingInfo(details.shippingId))
  .then(shipping => console.log(shipping))
  .catch(error => console.error(error));
\`\`\`

### 3. Async/Await (Best! ✨)

\`\`\`javascript
async function getFullOrderInfo(userId) {
  try {
    const user = await getUserData(userId);
    const orders = await getOrders(user.id);
    const details = await getOrderDetails(orders[0].id);
    const shipping = await getShippingInfo(details.shippingId);
    console.log(shipping);
  } catch (error) {
    console.error(error);
  }
}
\`\`\`

## Cú pháp cơ bản

### Khai báo Async Function

\`\`\`javascript
// Function declaration
async function fetchData() {
  return 'data';
}

// Function expression
const fetchData = async function() {
  return 'data';
};

// Arrow function
const fetchData = async () => {
  return 'data';
};

// Async function ALWAYS returns a Promise
fetchData().then(data => console.log(data)); // 'data'
\`\`\`

### Sử dụng Await

\`\`\`javascript
async function fetchUserData() {
  // await chỉ có thể dùng trong async function
  const response = await fetch('https://api.example.com/user/1');
  const data = await response.json();
  return data;
}
\`\`\`

## Ví dụ thực tế

### 1. Fetch API Data

\`\`\`javascript
async function getUser(userId) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw error;
  }
}

// Sử dụng
async function displayUser() {
  const user = await getUser(123);
  console.log(user.name);
}
\`\`\`

### 2. Multiple Async Operations (Sequential)

\`\`\`javascript
async function processData() {
  console.log('Start');
  
  const data1 = await fetchData1(); // Chờ 1s
  console.log('Data 1 loaded');
  
  const data2 = await fetchData2(); // Chờ 1s
  console.log('Data 2 loaded');
  
  const data3 = await fetchData3(); // Chờ 1s
  console.log('Data 3 loaded');
  
  // Tổng: 3 seconds
  return [data1, data2, data3];
}
\`\`\`

### 3. Multiple Async Operations (Parallel) ⚡

\`\`\`javascript
async function processDataParallel() {
  console.log('Start');
  
  // Chạy đồng thời (parallel)
  const [data1, data2, data3] = await Promise.all([
    fetchData1(),
    fetchData2(),
    fetchData3()
  ]);
  
  // Tổng: 1 second (nhanh hơn 3x!)
  return [data1, data2, data3];
}
\`\`\`

### 4. Error Handling

\`\`\`javascript
async function robustFetch(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Sử dụng
const result = await robustFetch('https://api.example.com/data');
if (result.success) {
  console.log(result.data);
} else {
  console.error(result.error);
}
\`\`\`

### 5. Async/Await với Loops

\`\`\`javascript
// ❌ SAI - forEach không chờ async
userIds.forEach(async (id) => {
  const user = await getUser(id);
  console.log(user);
});

// ✅ ĐÚNG - for...of chờ async
for (const id of userIds) {
  const user = await getUser(id);
  console.log(user);
}

// ✅ ĐÚNG - map + Promise.all (parallel)
const users = await Promise.all(
  userIds.map(id => getUser(id))
);
\`\`\`

## Advanced Patterns

### 1. Retry Logic

\`\`\`javascript
async function fetchWithRetry(url, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      console.log(\`Retry \${i + 1}/\${maxRetries}...\`);
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
}
\`\`\`

### 2. Timeout

\`\`\`javascript
function timeout(ms) {
  return new Promise((_, reject) => 
    setTimeout(() => reject(new Error('Timeout')), ms)
  );
}

async function fetchWithTimeout(url, ms = 5000) {
  try {
    const response = await Promise.race([
      fetch(url),
      timeout(ms)
    ]);
    return await response.json();
  } catch (error) {
    console.error('Request failed:', error.message);
    throw error;
  }
}
\`\`\`

### 3. Promise.allSettled (Get all results)

\`\`\`javascript
async function fetchMultipleAPIs() {
  const results = await Promise.allSettled([
    fetch('https://api1.com/data'),
    fetch('https://api2.com/data'),
    fetch('https://api3.com/data')
  ]);
  
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      console.log(\`API \${index + 1}: Success\`, result.value);
    } else {
      console.log(\`API \${index + 1}: Failed\`, result.reason);
    }
  });
}
\`\`\`

## Common Mistakes & Best Practices

### ❌ Không await Promise

\`\`\`javascript
async function bad() {
  const data = fetchData(); // ❌ Trả về Promise, không phải data
  console.log(data); // Promise { <pending> }
}

async function good() {
  const data = await fetchData(); // ✅ Đúng
  console.log(data); // actual data
}
\`\`\`

### ❌ Quên try-catch

\`\`\`javascript
async function bad() {
  const data = await fetchData(); // ❌ Nếu fail, unhandled rejection
  return data;
}

async function good() {
  try {
    const data = await fetchData(); // ✅ Error được catch
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
\`\`\`

### ✅ Best Practices

1. **Always use try-catch** cho error handling
2. **Use Promise.all** khi các operations độc lập
3. **Avoid await in loops** nếu có thể parallel
4. **Add timeout** cho network requests
5. **Return early** để tránh nested code

## Kết luận

Async/await làm asynchronous code dễ đọc như synchronous code, giúp:
- Tránh callback hell
- Error handling dễ dàng với try-catch
- Code dễ debug và maintain
- Performance tốt hơn với Promise.all

Hãy practice với các API calls thực tế để master async/await!
        `
    },
    {
        id: 5,
        title: "Java Stream API: Xử lý dữ liệu hiệu quả",
        excerpt: "Tận dụng sức mạnh của Stream API để filter, map, reduce dữ liệu một cách functional và dễ bảo trì.",
        date: "20/08/2024",
        category: "Java",
        readTime: "9 phút đọc",
        tags: ["Java", "Stream API", "Functional Programming"],
        content: `
## Stream API là gì?

Stream API (Java 8+) là một cách hiện đại để xử lý collections theo phong cách functional programming. Stream không phải là data structure, mà là một pipeline operations để transform data.

## Tạo Stream

\`\`\`java
// Từ Collection
List<String> list = Arrays.asList("Java", "Python", "JavaScript");
Stream<String> stream = list.stream();

// Từ Array
String[] array = {"Java", "Python", "JavaScript"};
Stream<String> stream = Arrays.stream(array);

// Từ values
Stream<String> stream = Stream.of("Java", "Python", "JavaScript");

// Infinite stream
Stream<Integer> infiniteStream = Stream.iterate(0, n -> n + 1);

// Generate random
Stream<Double> randomStream = Stream.generate(Math::random);
\`\`\`

## Intermediate Operations (Lazy)

### 1. filter() - Lọc dữ liệu

\`\`\`java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Lấy số chẵn
List<Integer> evenNumbers = numbers.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());
// [2, 4, 6, 8, 10]

// Filter với điều kiện phức tạp
List<User> activeAdults = users.stream()
    .filter(user -> user.getAge() >= 18)
    .filter(User::isActive)
    .collect(Collectors.toList());
\`\`\`

### 2. map() - Transform dữ liệu

\`\`\`java
List<String> names = Arrays.asList("john", "alice", "bob");

// Uppercase names
List<String> upperNames = names.stream()
    .map(String::toUpperCase)
    .collect(Collectors.toList());
// ["JOHN", "ALICE", "BOB"]

// Extract property
List<User> users = getUserList();
List<String> emails = users.stream()
    .map(User::getEmail)
    .collect(Collectors.toList());

// Complex transformation
List<UserDTO> dtos = users.stream()
    .map(user -> new UserDTO(user.getId(), user.getName()))
    .collect(Collectors.toList());
\`\`\`

### 3. flatMap() - Flatten nested structures

\`\`\`java
List<List<Integer>> nestedList = Arrays.asList(
    Arrays.asList(1, 2, 3),
    Arrays.asList(4, 5, 6),
    Arrays.asList(7, 8, 9)
);

// Flatten to single list
List<Integer> flatList = nestedList.stream()
    .flatMap(Collection::stream)
    .collect(Collectors.toList());
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Real example: Get all order items from users
List<OrderItem> allItems = users.stream()
    .flatMap(user -> user.getOrders().stream())
    .flatMap(order -> order.getItems().stream())
    .collect(Collectors.toList());
\`\`\`

### 4. sorted() - Sắp xếp

\`\`\`java
List<Integer> numbers = Arrays.asList(5, 2, 8, 1, 9, 3);

// Natural order
List<Integer> sorted = numbers.stream()
    .sorted()
    .collect(Collectors.toList());
// [1, 2, 3, 5, 8, 9]

// Custom comparator
List<User> sortedUsers = users.stream()
    .sorted(Comparator.comparing(User::getAge))
    .collect(Collectors.toList());

// Sort descending
List<User> sortedDesc = users.stream()
    .sorted(Comparator.comparing(User::getAge).reversed())
    .collect(Collectors.toList());

// Multiple fields
List<User> sorted = users.stream()
    .sorted(Comparator
        .comparing(User::getLastName)
        .thenComparing(User::getFirstName))
    .collect(Collectors.toList());
\`\`\`

### 5. distinct() - Loại bỏ duplicates

\`\`\`java
List<Integer> numbers = Arrays.asList(1, 2, 2, 3, 3, 3, 4, 5, 5);
List<Integer> unique = numbers.stream()
    .distinct()
    .collect(Collectors.toList());
// [1, 2, 3, 4, 5]
\`\`\`

### 6. limit() & skip()

\`\`\`java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// First 5 elements
List<Integer> first5 = numbers.stream()
    .limit(5)
    .collect(Collectors.toList());
// [1, 2, 3, 4, 5]

// Skip first 3, take next 4
List<Integer> page = numbers.stream()
    .skip(3)
    .limit(4)
    .collect(Collectors.toList());
// [4, 5, 6, 7]

// Pagination
int page = 2;
int pageSize = 10;
List<User> users = userList.stream()
    .skip((page - 1) * pageSize)
    .limit(pageSize)
    .collect(Collectors.toList());
\`\`\`

## Terminal Operations (Eager)

### 1. collect() - Thu thập kết quả

\`\`\`java
// To List
List<String> list = stream.collect(Collectors.toList());

// To Set
Set<String> set = stream.collect(Collectors.toSet());

// To Map
Map<Long, User> userMap = users.stream()
    .collect(Collectors.toMap(User::getId, user -> user));

// Grouping
Map<String, List<User>> usersByCity = users.stream()
    .collect(Collectors.groupingBy(User::getCity));

// Joining strings
String names = users.stream()
    .map(User::getName)
    .collect(Collectors.joining(", "));
// "John, Alice, Bob"
\`\`\`

### 2. forEach() - Iterate

\`\`\`java
// Print all
users.stream()
    .forEach(user -> System.out.println(user.getName()));

// Method reference
users.stream()
    .forEach(System.out::println);
\`\`\`

### 3. reduce() - Aggregate

\`\`\`java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

// Sum
int sum = numbers.stream()
    .reduce(0, (a, b) -> a + b);
// or
int sum = numbers.stream()
    .reduce(0, Integer::sum);

// Product
int product = numbers.stream()
    .reduce(1, (a, b) -> a * b);

// Max value
Optional<Integer> max = numbers.stream()
    .reduce(Integer::max);

// Concatenate strings
String combined = Stream.of("Java", "is", "awesome")
    .reduce("", (a, b) -> a + " " + b);
// " Java is awesome"
\`\`\`

### 4. count(), min(), max(), sum(), average()

\`\`\`java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

long count = numbers.stream().count(); // 5

Optional<Integer> min = numbers.stream().min(Integer::compare); // 1
Optional<Integer> max = numbers.stream().max(Integer::compare); // 5

// IntStream có sẵn sum() và average()
int sum = numbers.stream()
    .mapToInt(Integer::intValue)
    .sum(); // 15

double avg = numbers.stream()
    .mapToInt(Integer::intValue)
    .average()
    .orElse(0.0); // 3.0
\`\`\`

### 5. anyMatch(), allMatch(), noneMatch()

\`\`\`java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

boolean hasEven = numbers.stream()
    .anyMatch(n -> n % 2 == 0); // true

boolean allPositive = numbers.stream()
    .allMatch(n -> n > 0); // true

boolean noNegative = numbers.stream()
    .noneMatch(n -> n < 0); // true
\`\`\`

### 6. findFirst(), findAny()

\`\`\`java
// Find first adult user
Optional<User> firstAdult = users.stream()
    .filter(user -> user.getAge() >= 18)
    .findFirst();

// Find any (useful in parallel streams)
Optional<User> anyAdmin = users.parallelStream()
    .filter(User::isAdmin)
    .findAny();
\`\`\`

## Ví dụ thực tế

### 1. Filter, Transform và Collect

\`\`\`java
// Lấy email của users active, age >= 18, sorted by name
List<String> emails = users.stream()
    .filter(User::isActive)
    .filter(user -> user.getAge() >= 18)
    .sorted(Comparator.comparing(User::getName))
    .map(User::getEmail)
    .collect(Collectors.toList());
\`\`\`

### 2. Grouping và Statistics

\`\`\`java
// Group users by city
Map<String, List<User>> usersByCity = users.stream()
    .collect(Collectors.groupingBy(User::getCity));

// Count users by city
Map<String, Long> countByCity = users.stream()
    .collect(Collectors.groupingBy(
        User::getCity,
        Collectors.counting()
    ));

// Average age by city
Map<String, Double> avgAgeByCity = users.stream()
    .collect(Collectors.groupingBy(
        User::getCity,
        Collectors.averagingInt(User::getAge)
    ));
\`\`\`

### 3. Complex Business Logic

\`\`\`java
// Tính tổng revenue từ active orders của premium users
double totalRevenue = users.stream()
    .filter(User::isPremium)
    .flatMap(user -> user.getOrders().stream())
    .filter(Order::isActive)
    .mapToDouble(Order::getTotalAmount)
    .sum();
\`\`\`

## Parallel Streams ⚡

\`\`\`java
// Sequential
long count = users.stream()
    .filter(User::isActive)
    .count();

// Parallel (faster for large datasets)
long count = users.parallelStream()
    .filter(User::isActive)
    .count();
\`\`\`

**Chú ý:** Parallel streams tốt cho CPU-intensive operations trên large datasets, nhưng có overhead. Test để đảm bảo performance gain!

## Best Practices

1. **Prefer method references**: \`User::getName\` thay vì \`user -> user.getName()\`
2. **Chain operations**: Làm code readable
3. **Use appropriate terminal operation**: collect, forEach, reduce...
4. **Avoid side effects**: Stream operations nên pure
5. **Don't reuse streams**: Stream chỉ dùng một lần
6. **Consider parallel**: Cho large datasets (>10000 elements)

## Kết luận

Stream API biến code imperative thành declarative, dễ đọc và maintain. Practice với các use cases thực tế để master Stream API!
        `
    },
    {
        id: 6,
        title: "React Hooks với JavaScript: useState và useEffect",
        excerpt: "Hiểu sâu về hai hooks cơ bản nhất trong React - useState để quản lý state và useEffect để xử lý side effects.",
        date: "12/08/2024",
        category: "JavaScript",
        readTime: "11 phút đọc",
        tags: ["JavaScript", "React", "Hooks"],
        content: `
## React Hooks là gì?

Hooks (React 16.8+) cho phép sử dụng state và React features trong functional components, không cần class components nữa.

## Rules of Hooks ⚠️

1. **Chỉ gọi Hooks ở top level** - Không gọi trong loops, conditions, nested functions
2. **Chỉ gọi Hooks trong React functions** - Function components hoặc custom Hooks

## useState - State Management

### Basic Usage

\`\`\`javascript
import { useState } from 'react';

function Counter() {
  // [currentState, setState function]
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}
\`\`\`

### Multiple State Variables

\`\`\`javascript
function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, age, isActive });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Name"
      />
      <input 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email"
        type="email"
      />
      <input 
        value={age} 
        onChange={(e) => setAge(Number(e.target.value))} 
        placeholder="Age"
        type="number"
      />
      <label>
        <input 
          type="checkbox"
          checked={isActive}
          onChange={(e) => setIsActive(e.target.checked)}
        />
        Active
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
\`\`\`

### State với Objects

\`\`\`javascript
function UserProfile() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: 0
  });

  // ❌ Wrong - mutates state directly
  const updateName = (name) => {
    user.name = name;
    setUser(user);
  };

  // ✅ Correct - creates new object
  const updateName = (name) => {
    setUser({
      ...user,
      name: name
    });
  };

  // Handle multiple fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form>
      <input 
        name="name"
        value={user.name}
        onChange={handleChange}
      />
      <input 
        name="email"
        value={user.email}
        onChange={handleChange}
      />
    </form>
  );
}
\`\`\`

### State với Arrays

\`\`\`javascript
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // Add item
  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput('');
  };

  // Remove item
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Update item
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id 
        ? { ...todo, done: !todo.done }
        : todo
    ));
  };

  return (
    <div>
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input 
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ 
              textDecoration: todo.done ? 'line-through' : 'none' 
            }}>
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

### Functional Updates

\`\`\`javascript
function Counter() {
  const [count, setCount] = useState(0);

  // ❌ Problem with async updates
  const incrementThreeTimes = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    // count chỉ tăng 1, không phải 3!
  };

  // ✅ Correct - functional update
  const incrementThreeTimes = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    // count tăng 3!
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementThreeTimes}>+3</button>
    </div>
  );
}
\`\`\`

### Lazy Initial State

\`\`\`javascript
// ❌ Expensive computation runs every render
function ExpensiveComponent() {
  const [data, setData] = useState(computeExpensiveValue());
  // ...
}

// ✅ Computation chỉ chạy once
function ExpensiveComponent() {
  const [data, setData] = useState(() => computeExpensiveValue());
  // ...
}

// Example
function UserList() {
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem('users');
    return saved ? JSON.parse(saved) : [];
  });
}
\`\`\`

## useEffect - Side Effects

### Basic Usage

\`\`\`javascript
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Side effect code
    setLoading(true);
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]); // Dependencies array

  if (loading) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}
\`\`\`

### Dependencies Array

\`\`\`javascript
// ❌ Runs after every render
useEffect(() => {
  console.log('Runs every render');
});

// ✅ Runs only once after mount
useEffect(() => {
  console.log('Runs once');
}, []);

// ✅ Runs when count changes
useEffect(() => {
  console.log('Count changed:', count);
}, [count]);

// ✅ Runs when count or name changes
useEffect(() => {
  console.log('Count or name changed');
}, [count, name]);
\`\`\`

### Cleanup Function

\`\`\`javascript
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Setup
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup - runs before next effect and on unmount
    return () => {
      clearInterval(interval);
    };
  }, []); // Empty array = chỉ setup once

  return <div>Seconds: {seconds}</div>;
}
\`\`\`

### Event Listeners Cleanup

\`\`\`javascript
function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div>Window width: {width}px</div>;
}
\`\`\`

### Async useEffect

\`\`\`javascript
function UserData({ userId }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ❌ Can't make useEffect callback async directly
    // useEffect(async () => { ... }, []);

    // ✅ Create async function inside
    let cancelled = false;

    const fetchUser = async () => {
      try {
        setError(null);
        const response = await fetch(\`/api/users/\${userId}\`);
        const data = await response.json();
        
        if (!cancelled) {
          setUser(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
        }
      }
    };

    fetchUser();

    // Cleanup - prevent setting state on unmounted component
    return () => {
      cancelled = true;
    };
  }, [userId]);

  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}
\`\`\`

### Multiple Effects

\`\`\`javascript
function UserDashboard({ userId }) {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  // Effect 1: Fetch user
  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]);

  // Effect 2: Fetch posts
  useEffect(() => {
    fetchUserPosts(userId).then(setPosts);
  }, [userId]);

  // Effect 3: Update document title
  useEffect(() => {
    if (user) {
      document.title = \`\${user.name}'s Dashboard\`;
    }
  }, [user]);

  // Effect 4: Track analytics
  useEffect(() => {
    logPageView('dashboard', userId);
  }, [userId]);

  // ...
}
\`\`\`

## Common Patterns

### Fetch Data

\`\`\`javascript
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        
        if (!cancelled) {
          setData(json);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [url]);

  return { data, loading, error };
}

// Usage
function UserList() {
  const { data, loading, error } = useFetch('/api/users');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <ul>
      {data.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
\`\`\`

### Local Storage Sync

\`\`\`javascript
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// Usage
function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [lang, setLang] = useLocalStorage('language', 'en');

  return (
    <div>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}
\`\`\`

## Best Practices

1. **Separate concerns**: Một effect cho một concern
2. **Cleanup properly**: Luôn cleanup subscriptions, timers, listeners
3. **Dependencies đúng**: Đừng skip dependencies (dùng ESLint plugin)
4. **Avoid infinite loops**: Careful với dependencies
5. **Use custom hooks**: Extract reusable logic
6. **Functional updates**: Dùng \`setState(prev => ...)\` khi cần previous state

## Kết luận

useState và useEffect là foundation của React Hooks. Master hai hooks này để xây dựng powerful functional components!
        `
    },
    {
        id: 7,
        title: "JPA và Hibernate: Quản lý database trong Java",
        excerpt: "Tìm hiểu cách sử dụng JPA và Hibernate để ánh xạ đối tượng Java với database, bao gồm relationships và queries.",
        date: "05/08/2024",
        category: "Java",
        readTime: "13 phút đọc",
        tags: ["Java", "JPA", "Hibernate", "Database"],
        content: `
## JPA và Hibernate là gì?

**JPA (Java Persistence API)** là specification để ORM (Object-Relational Mapping) trong Java. **Hibernate** là implementation phổ biến nhất của JPA.

ORM giúp map Java objects ↔ Database tables, tránh viết raw SQL.

## Setup với Spring Boot

### 1. Dependencies (pom.xml)

\`\`\`xml
<dependencies>
    <!-- Spring Data JPA -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    
    <!-- Database driver (ví dụ MySQL) -->
    <dependency>
        <groupId>com.mysql</groupId>
        <artifactId>mysql-connector-j</artifactId>
        <scope>runtime</scope>
    </dependency>
    
    <!-- H2 cho testing -->
    <dependency>
        <groupId>com.h2database</groupId>
        <artifactId>h2</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>
\`\`\`

### 2. Configuration (application.properties)

\`\`\`properties
# Database connection
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA/Hibernate properties
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

# Logging
logging.level.org.hibernate.SQL=DEBUG
logging.level.org.hibernate.type.descriptor.sql.BasicBinder=TRACE
\`\`\`

## Entity Mapping

### Basic Entity

\`\`\`java
import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Table(name = "users")
@Data
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "username", nullable = false, unique = true, length = 50)
    private String username;
    
    @Column(nullable = false)
    private String email;
    
    private String firstName;
    private String lastName;
    
    @Column(columnDefinition = "TEXT")
    private String bio;
    
    @Enumerated(EnumType.STRING)
    private UserRole role;
    
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime createdAt;
    
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime updatedAt;
    
    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }
    
    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}

enum UserRole {
    USER, ADMIN, MODERATOR
}
\`\`\`

### Entity Annotations

- **@Entity**: Đánh dấu class là JPA entity
- **@Table**: Tên table trong database (optional)
- **@Id**: Primary key
- **@GeneratedValue**: Auto-generate ID (IDENTITY, SEQUENCE, AUTO, TABLE)
- **@Column**: Customize column (name, nullable, unique, length...)
- **@Enumerated**: Map enum (STRING hoặc ORDINAL)
- **@Temporal**: Map Date/Calendar types
- **@PrePersist, @PreUpdate**: Lifecycle callbacks

## Relationships

### @OneToMany & @ManyToOne

\`\`\`java
// User.java
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String username;
    
    // One user has many posts
    @OneToMany(mappedBy = "author", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Post> posts = new ArrayList<>();
    
    // Helper method
    public void addPost(Post post) {
        posts.add(post);
        post.setAuthor(this);
    }
}

// Post.java
@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String title;
    
    @Column(columnDefinition = "TEXT")
    private String content;
    
    // Many posts belong to one user
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User author;
}
\`\`\`

**Key points:**
- **mappedBy**: Chỉ field owner bên kia relationship
- **cascade**: Operations tự động cascade (PERSIST, MERGE, REMOVE, REFRESH, DETACH, ALL)
- **orphanRemoval**: Xóa child khi remove khỏi collection
- **FetchType.LAZY**: Load khi access (default cho @ManyToOne)
- **FetchType.EAGER**: Load ngay lập tức

### @ManyToMany

\`\`\`java
// Student.java
@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    
    @ManyToMany
    @JoinTable(
        name = "student_course",
        joinColumns = @JoinColumn(name = "student_id"),
        inverseJoinColumns = @JoinColumn(name = "course_id")
    )
    private Set<Course> courses = new HashSet<>();
}

// Course.java
@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    
    @ManyToMany(mappedBy = "courses")
    private Set<Student> students = new HashSet<>();
}
\`\`\`

### @OneToOne

\`\`\`java
// User.java
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String username;
    
    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private UserProfile profile;
}

// UserProfile.java
@Entity
public class UserProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String bio;
    private String website;
    
    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;
}
\`\`\`

## Repository Pattern

### JpaRepository

\`\`\`java
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    
    // Derived query methods
    Optional<User> findByUsername(String username);
    List<User> findByRole(UserRole role);
    List<User> findByEmailContaining(String email);
    List<User> findByCreatedAtAfter(LocalDateTime date);
    
    boolean existsByUsername(String username);
    long countByRole(UserRole role);
    
    void deleteByUsername(String username);
    
    // Custom JPQL query
    @Query("SELECT u FROM User u WHERE u.email LIKE %:domain%")
    List<User> findByEmailDomain(@Param("domain") String domain);
    
    // Native SQL query
    @Query(value = "SELECT * FROM users WHERE role = ?1", nativeQuery = true)
    List<User> findByRoleNative(String role);
    
    // Complex query with JOIN
    @Query("SELECT u FROM User u JOIN FETCH u.posts WHERE u.id = :userId")
    Optional<User> findByIdWithPosts(@Param("userId") Long userId);
}
\`\`\`

### Derived Query Keywords

- **findBy, getBy, queryBy, readBy**
- **And, Or**: \`findByUsernameAndEmail\`
- **Like**: \`findByNameLike\`
- **Containing, StartingWith, EndingWith**
- **GreaterThan, LessThan, Between**
- **OrderBy**: \`findByRoleOrderByCreatedAtDesc\`
- **Top, First**: \`findTop5ByRole\`

## JPQL (Java Persistence Query Language)

\`\`\`java
// Basic SELECT
@Query("SELECT u FROM User u WHERE u.role = :role")
List<User> findUsersByRole(@Param("role") UserRole role);

// Projection (select specific fields)
@Query("SELECT u.username, u.email FROM User u WHERE u.role = :role")
List<Object[]> findUsernamesAndEmails(@Param("role") UserRole role);

// Using DTO projection
@Query("SELECT new com.example.dto.UserDTO(u.id, u.username, u.email) " +
       "FROM User u WHERE u.role = :role")
List<UserDTO> findUserDTOs(@Param("role") UserRole role);

// Aggregate functions
@Query("SELECT COUNT(u) FROM User u WHERE u.role = :role")
long countByRole(@Param("role") UserRole role);

@Query("SELECT u.role, COUNT(u) FROM User u GROUP BY u.role")
List<Object[]> countByRoleGrouped();

// JOIN queries
@Query("SELECT p FROM Post p JOIN p.author u WHERE u.username = :username")
List<Post> findPostsByUsername(@Param("username") String username);

// UPDATE query
@Modifying
@Query("UPDATE User u SET u.role = :role WHERE u.id = :userId")
int updateUserRole(@Param("userId") Long userId, @Param("role") UserRole role);

// DELETE query
@Modifying
@Query("DELETE FROM Post p WHERE p.author.id = :userId")
int deletePostsByUserId(@Param("userId") Long userId);
\`\`\`

## Common Issues & Solutions

### 1. N+1 Problem ⚠️

**Problem:** Load 1 user → 1 query, load 100 posts → 100 queries = 101 queries!

\`\`\`java
// ❌ Bad - N+1 queries
List<User> users = userRepository.findAll();
for (User user : users) {
    System.out.println(user.getPosts().size()); // N queries
}

// ✅ Good - Single query with JOIN FETCH
@Query("SELECT DISTINCT u FROM User u LEFT JOIN FETCH u.posts")
List<User> findAllWithPosts();

// ✅ Or use @EntityGraph
@EntityGraph(attributePaths = {"posts"})
List<User> findAll();
\`\`\`

### 2. LazyInitializationException

**Problem:** Access lazy-loaded collection outside transaction

\`\`\`java
// ❌ Error
User user = userRepository.findById(1L).orElseThrow();
// Transaction closed
user.getPosts().size(); // LazyInitializationException!

// ✅ Solutions:

// 1. Fetch eagerly with JOIN FETCH
@Query("SELECT u FROM User u LEFT JOIN FETCH u.posts WHERE u.id = :id")
Optional<User> findByIdWithPosts(@Param("id") Long id);

// 2. Use @Transactional on service method
@Transactional
public UserDTO getUserWithPosts(Long userId) {
    User user = userRepository.findById(userId).orElseThrow();
    user.getPosts().size(); // OK inside transaction
    return new UserDTO(user);
}

// 3. Initialize collections explicitly
Hibernate.initialize(user.getPosts());
\`\`\`

### 3. Bidirectional Relationship Sync

\`\`\`java
// ❌ Bad - Không sync both sides
user.getPosts().add(post);
userRepository.save(user); // post.author = null!

// ✅ Good - Sync both sides
public void addPost(Post post) {
    posts.add(post);
    post.setAuthor(this); // Sync!
}

public void removePost(Post post) {
    posts.remove(post);
    post.setAuthor(null);
}
\`\`\`

## Performance Tips

1. **Use LAZY loading** cho collections
2. **Avoid N+1** với JOIN FETCH hoặc @EntityGraph
3. **Use Pagination** cho large results
4. **Index columns** frequently queried
5. **Use Projections** nếu không cần full entity
6. **Batch operations** với \`@Modifying\` queries
7. **Enable query cache** nếu phù hợp
8. **Monitor SQL** với \`show-sql\` và logging

## Kết luận

JPA/Hibernate đơn giản hóa database operations trong Java. Master các concepts:
- Entity mapping với annotations
- Relationships (@OneToMany, @ManyToOne, @ManyToMany)
- Repository pattern
- JPQL queries
- Performance optimization (N+1, lazy loading)

Practice với real projects để hiểu sâu hơn!
        `
    },
    {
        id: 8,
        title: "Closure và Scope trong JavaScript",
        excerpt: "Giải mã khái niệm closure - một tính năng mạnh mẽ của JavaScript giúp tạo private variables và factory functions.",
        date: "28/07/2024",
        category: "JavaScript",
        readTime: "7 phút đọc",
        tags: ["JavaScript", "Closures", "Scope"],
        content: `
## Closure là gì?

**Closure** là function có thể access variables từ outer function scope, ngay cả sau khi outer function đã return.

Simple definition: **Function + Lexical Environment = Closure**

## Scope trong JavaScript

### 1. Global Scope

\`\`\`javascript
var globalVar = 'I am global';

function test() {
  console.log(globalVar); // Accessible
}

test(); // "I am global"
console.log(globalVar); // "I am global"
\`\`\`

### 2. Function Scope

\`\`\`javascript
function outer() {
  var functionVar = 'I am in function';
  
  function inner() {
    console.log(functionVar); // Accessible
  }
  
  inner();
}

outer(); // "I am in function"
console.log(functionVar); // ReferenceError!
\`\`\`

### 3. Block Scope (let/const)

\`\`\`javascript
if (true) {
  var varVariable = 'var is function scoped';
  let letVariable = 'let is block scoped';
  const constVariable = 'const is block scoped';
}

console.log(varVariable); // "var is function scoped"
console.log(letVariable); // ReferenceError!
console.log(constVariable); // ReferenceError!
\`\`\`

## Closure Examples

### Basic Closure

\`\`\`javascript
function outer() {
  const message = 'Hello from outer!';
  
  function inner() {
    console.log(message); // Access outer variable
  }
  
  return inner;
}

const myFunction = outer();
myFunction(); // "Hello from outer!"
// outer() đã return, nhưng inner() vẫn access được message!
\`\`\`

### Counter với Closure

\`\`\`javascript
function createCounter() {
  let count = 0; // Private variable
  
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount());  // 1
console.log(counter.count); // undefined - count is private!
\`\`\`

### Private Variables Pattern

\`\`\`javascript
function BankAccount(initialBalance) {
  let balance = initialBalance; // Private
  
  return {
    deposit: function(amount) {
      if (amount > 0) {
        balance += amount;
        return balance;
      }
      throw new Error('Amount must be positive');
    },
    
    withdraw: function(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        return balance;
      }
      throw new Error('Invalid amount');
    },
    
    getBalance: function() {
      return balance;
    }
  };
}

const myAccount = BankAccount(1000);
console.log(myAccount.getBalance()); // 1000
myAccount.deposit(500); // 1500
myAccount.withdraw(300); // 1200
console.log(myAccount.balance); // undefined - private!
\`\`\`

### Function Factory

\`\`\`javascript
function multiplyBy(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);
const quadruple = multiplyBy(4);

console.log(double(5)); // 10
console.log(triple(5)); // 15
console.log(quadruple(5)); // 20
\`\`\`

### Greeting Generator

\`\`\`javascript
function createGreeting(greeting) {
  return function(name) {
    return \`\${greeting}, \${name}!\`;
  };
}

const sayHello = createGreeting('Hello');
const sayHi = createGreeting('Hi');
const sayBonjour = createGreeting('Bonjour');

console.log(sayHello('John')); // "Hello, John!"
console.log(sayHi('Alice')); // "Hi, Alice!"
console.log(sayBonjour('Marie')); // "Bonjour, Marie!"
\`\`\`

## Closure với Loops (Common Pitfall)

### ❌ Problem với var

\`\`\`javascript
for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i); // Output: 4, 4, 4 (not 1, 2, 3!)
  }, i * 1000);
}
// var is function scoped, tất cả callbacks share cùng i
\`\`\`

### ✅ Solution 1: Use let

\`\`\`javascript
for (let i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i); // Output: 1, 2, 3
  }, i * 1000);
}
// let is block scoped, mỗi iteration có i riêng
\`\`\`

### ✅ Solution 2: IIFE (Immediately Invoked Function Expression)

\`\`\`javascript
for (var i = 1; i <= 3; i++) {
  (function(index) {
    setTimeout(function() {
      console.log(index); // Output: 1, 2, 3
    }, index * 1000);
  })(i);
}
// IIFE tạo closure với index copy của i
\`\`\`

### ✅ Solution 3: Function wrapper

\`\`\`javascript
function makeTimer(i) {
  return function() {
    console.log(i);
  };
}

for (var i = 1; i <= 3; i++) {
  setTimeout(makeTimer(i), i * 1000);
}
// Output: 1, 2, 3
\`\`\`

## Real-World Use Cases

### 1. Module Pattern

\`\`\`javascript
const Calculator = (function() {
  // Private variables
  let result = 0;
  
  // Private function
  function log(operation, value) {
    console.log(\`\${operation}: \${value}\`);
  }
  
  // Public API
  return {
    add: function(num) {
      result += num;
      log('Add', num);
      return this;
    },
    
    subtract: function(num) {
      result -= num;
      log('Subtract', num);
      return this;
    },
    
    multiply: function(num) {
      result *= num;
      log('Multiply', num);
      return this;
    },
    
    getResult: function() {
      return result;
    },
    
    reset: function() {
      result = 0;
      return this;
    }
  };
})();

// Usage
Calculator.add(10).multiply(2).subtract(5).getResult(); // 15
\`\`\`

### 2. Memoization (Cache function results)

\`\`\`javascript
function memoize(fn) {
  const cache = {};
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (cache[key]) {
      console.log('From cache:', key);
      return cache[key];
    }
    
    console.log('Computing:', key);
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

// Expensive function
const fibonacci = memoize(function(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(10)); // Computing
console.log(fibonacci(10)); // From cache
\`\`\`

### 3. Event Handlers với Private Data

\`\`\`javascript
function setupButton(buttonId) {
  let clickCount = 0;
  const button = document.getElementById(buttonId);
  
  button.addEventListener('click', function() {
    clickCount++;
    console.log(\`Button clicked \${clickCount} times\`);
  });
  
  return {
    getClickCount: function() {
      return clickCount;
    },
    reset: function() {
      clickCount = 0;
    }
  };
}

const myButton = setupButton('myBtn');
// Click button multiple times...
console.log(myButton.getClickCount()); // Shows count
\`\`\`

### 4. Partial Application & Currying

\`\`\`javascript
// Partial application
function partial(fn, ...fixedArgs) {
  return function(...remainingArgs) {
    return fn(...fixedArgs, ...remainingArgs);
  };
}

function greet(greeting, name) {
  return \`\${greeting}, \${name}!\`;
}

const sayHello = partial(greet, 'Hello');
console.log(sayHello('John')); // "Hello, John!"

// Currying
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function(...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6
console.log(curriedSum(1)(2, 3)); // 6
\`\`\`

### 5. Debounce Function

\`\`\`javascript
function debounce(func, delay) {
  let timeoutId;
  
  return function(...args) {
    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

// Usage
const handleSearch = debounce(function(query) {
  console.log('Searching for:', query);
  // API call here
}, 500);

// Type in search box...
handleSearch('a');
handleSearch('ab');
handleSearch('abc'); // Only this executes after 500ms
\`\`\`

## Memory Considerations

Closures giữ references tới outer scope variables → có thể cause **memory leaks** nếu không cẩn thận!

\`\`\`javascript
// ❌ Potential memory leak
function addButtons() {
  const data = new Array(1000000).fill('Some data');
  
  document.getElementById('btn').addEventListener('click', function() {
    console.log('Clicked!');
    // Closure holds reference to 'data', không release!
  });
}

// ✅ Better - don't capture large variables if not needed
function addButtons() {
  const data = new Array(1000000).fill('Some data');
  const info = processData(data);
  
  document.getElementById('btn').addEventListener('click', function() {
    console.log('Clicked!', info);
    // Only captures 'info', not large 'data'
  });
}
\`\`\`

## Best Practices

1. **Use closures cho encapsulation** - Private variables/methods
2. **Avoid unnecessary closures** trong loops - Dùng let hoặc extract function
3. **Be careful với memory** - Đừng capture large objects không cần
4. **Use module pattern** cho complex objects
5. **Leverage factory functions** cho reusable logic

## Kết luận

Closures là một trong những concepts quan trọng nhất của JavaScript:
- Enable data privacy
- Create powerful patterns (Module, Factory, Memoization)
- Essential cho functional programming

Master closures để viết clean, maintainable JavaScript code!
        `
    },
    {
        id: 9,
        title: "Xử lý Exception trong Java: Best Practices",
        excerpt: "Học cách xử lý ngoại lệ đúng cách trong Java với try-catch, custom exceptions và các pattern phổ biến.",
        date: "20/07/2024",
        category: "Java",
        readTime: "10 phút đọc",
        tags: ["Java", "Exception Handling", "Error Management"],
        content: `
## Exception là gì?

**Exception** là event xảy ra trong runtime làm gián đoạn normal flow của program. Java có exception hierarchy:

\`\`\`
Throwable
├── Error (System errors, không nên catch)
│   ├── OutOfMemoryError
│   ├── StackOverflowError
│   └── ...
└── Exception
    ├── IOException (Checked)
    ├── SQLException (Checked)
    ├── RuntimeException (Unchecked)
    │   ├── NullPointerException
    │   ├── IllegalArgumentException
    │   ├── ArrayIndexOutOfBoundsException
    │   └── ...
    └── ...
\`\`\`

## Checked vs Unchecked Exceptions

### Checked Exceptions

Phải handle (try-catch) hoặc declare (throws) - compiler checks!

\`\`\`java
// ❌ Compiler error - must handle IOException
public void readFile(String path) {
    FileReader reader = new FileReader(path); // IOException
}

// ✅ Option 1: Handle with try-catch
public void readFile(String path) {
    try {
        FileReader reader = new FileReader(path);
        // Read file...
    } catch (IOException e) {
        e.printStackTrace();
    }
}

// ✅ Option 2: Propagate with throws
public void readFile(String path) throws IOException {
    FileReader reader = new FileReader(path);
    // Read file...
}
\`\`\`

### Unchecked Exceptions (RuntimeException)

Không bắt buộc handle - programming errors!

\`\`\`java
// No compiler error, but will throw at runtime
public int divide(int a, int b) {
    return a / b; // ArithmeticException if b = 0
}

String text = null;
System.out.println(text.length()); // NullPointerException

int[] arr = {1, 2, 3};
System.out.println(arr[10]); // ArrayIndexOutOfBoundsException
\`\`\`

## Try-Catch-Finally

### Basic Syntax

\`\`\`java
try {
    // Code có thể throw exception
    int result = riskyOperation();
} catch (SpecificException e) {
    // Handle specific exception
    System.err.println("Error: " + e.getMessage());
} finally {
    // Always executes (optional)
    // Cleanup resources
    cleanup();
}
\`\`\`

### Multiple Catch Blocks

\`\`\`java
try {
    String text = readFile("data.txt");
    int number = Integer.parseInt(text);
    int result = 100 / number;
} catch (FileNotFoundException e) {
    System.err.println("File not found: " + e.getMessage());
} catch (NumberFormatException e) {
    System.err.println("Invalid number format: " + e.getMessage());
} catch (ArithmeticException e) {
    System.err.println("Division by zero");
} catch (Exception e) {
    // Catch all other exceptions
    System.err.println("Unexpected error: " + e.getMessage());
}
\`\`\`

**Thứ tự quan trọng:** Specific exceptions trước, general sau!

### Multi-Catch (Java 7+)

\`\`\`java
try {
    // Risky code
} catch (IOException | SQLException e) {
    // Handle both với same logic
    logError(e);
    throw new ApplicationException("Data access error", e);
}
\`\`\`

### Try-with-Resources (Java 7+)

Auto-close resources implementing AutoCloseable!

\`\`\`java
// ❌ Old way - manual cleanup
FileReader reader = null;
try {
    reader = new FileReader("file.txt");
    // Read file...
} catch (IOException e) {
    e.printStackTrace();
} finally {
    if (reader != null) {
        try {
            reader.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

// ✅ New way - auto cleanup
try (FileReader reader = new FileReader("file.txt")) {
    // Read file...
    // reader.close() automatically called!
} catch (IOException e) {
    e.printStackTrace();
}

// Multiple resources
try (FileInputStream fis = new FileInputStream("in.txt");
     FileOutputStream fos = new FileOutputStream("out.txt")) {
    // Use both streams
    // Both auto-closed in reverse order
} catch (IOException e) {
    e.printStackTrace();
}
\`\`\`

## Throwing Exceptions

### throw Statement

\`\`\`java
public void setAge(int age) {
    if (age < 0) {
        throw new IllegalArgumentException("Age cannot be negative");
    }
    if (age > 150) {
        throw new IllegalArgumentException("Age too large");
    }
    this.age = age;
}

public User findUser(Long id) {
    User user = userRepository.findById(id);
    if (user == null) {
        throw new UserNotFoundException("User not found with id: " + id);
    }
    return user;
}
\`\`\`

### throws Declaration

\`\`\`java
public String readFile(String path) throws IOException {
    FileReader reader = new FileReader(path);
    // Read and return content
}

public void processData() throws IOException, SQLException {
    String data = readFile("data.txt");
    saveToDatabase(data);
}
\`\`\`

## Custom Exceptions

### Basic Custom Exception

\`\`\`java
// Checked exception
public class UserNotFoundException extends Exception {
    public UserNotFoundException(String message) {
        super(message);
    }
    
    public UserNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}

// Unchecked exception
public class InvalidInputException extends RuntimeException {
    public InvalidInputException(String message) {
        super(message);
    }
    
    public InvalidInputException(String message, Throwable cause) {
        super(message, cause);
    }
}
\`\`\`

### Exception with Additional Fields

\`\`\`java
public class ValidationException extends RuntimeException {
    private final String field;
    private final Object rejectedValue;
    
    public ValidationException(String message, String field, Object rejectedValue) {
        super(message);
        this.field = field;
        this.rejectedValue = rejectedValue;
    }
    
    public String getField() {
        return field;
    }
    
    public Object getRejectedValue() {
        return rejectedValue;
    }
}

// Usage
throw new ValidationException(
    "Invalid email format", 
    "email", 
    userEmail
);
\`\`\`

### Business Exception Hierarchy

\`\`\`java
// Base exception
public class ApplicationException extends RuntimeException {
    private final ErrorCode errorCode;
    
    public ApplicationException(ErrorCode errorCode, String message) {
        super(message);
        this.errorCode = errorCode;
    }
    
    public ApplicationException(ErrorCode errorCode, String message, Throwable cause) {
        super(message, cause);
    }
    
    public ErrorCode getErrorCode() {
        return errorCode;
    }
}

// Specific exceptions
public class ResourceNotFoundException extends ApplicationException {
    public ResourceNotFoundException(String resource, Object id) {
        super(
            ErrorCode.RESOURCE_NOT_FOUND,
            String.format("%s not found with id: %s", resource, id)
        );
    }
}

public class DuplicateResourceException extends ApplicationException {
    public DuplicateResourceException(String resource, String field) {
        super(
            ErrorCode.DUPLICATE_RESOURCE,
            String.format("%s already exists with %s", resource, field)
        );
    }
}

// Error codes
public enum ErrorCode {
    RESOURCE_NOT_FOUND(404),
    DUPLICATE_RESOURCE(409),
    VALIDATION_ERROR(400),
    UNAUTHORIZED(401),
    INTERNAL_ERROR(500);
    
    private final int httpStatus;
    
    ErrorCode(int httpStatus) {
        this.httpStatus = httpStatus;
    }
    
    public int getHttpStatus() {
        return httpStatus;
    }
}
\`\`\`

## Exception Handling Patterns

### 1. Repository Pattern

\`\`\`java
public class UserService {
    private final UserRepository userRepository;
    
    public User getUser(Long id) {
        return userRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("User", id));
    }
    
    public User createUser(UserDTO dto) {
        if (userRepository.existsByEmail(dto.getEmail())) {
            throw new DuplicateResourceException("User", "email");
        }
        
        try {
            User user = new User(dto);
            return userRepository.save(user);
        } catch (DataAccessException e) {
            throw new ApplicationException(
                ErrorCode.INTERNAL_ERROR,
                "Failed to create user",
                e
            );
        }
    }
}
\`\`\`

### 2. Validation Pattern

\`\`\`java
public class UserValidator {
    public void validate(UserDTO dto) {
        List<String> errors = new ArrayList<>();
        
        if (dto.getName() == null || dto.getName().isBlank()) {
            errors.add("Name is required");
        }
        
        if (dto.getEmail() == null || !isValidEmail(dto.getEmail())) {
            errors.add("Invalid email format");
        }
        
        if (dto.getAge() < 0 || dto.getAge() > 150) {
            errors.add("Age must be between 0 and 150");
        }
        
        if (!errors.isEmpty()) {
            throw new ValidationException(String.join(", ", errors));
        }
    }
}
\`\`\`

### 3. Retry Pattern

\`\`\`java
public <T> T executeWithRetry(Supplier<T> operation, int maxRetries) {
    int attempt = 0;
    Exception lastException = null;
    
    while (attempt < maxRetries) {
        try {
            return operation.get();
        } catch (TransientException e) {
            lastException = e;
            attempt++;
            
            if (attempt < maxRetries) {
                try {
                    Thread.sleep(1000 * attempt); // Exponential backoff
                } catch (InterruptedException ie) {
                    Thread.currentThread().interrupt();
                    throw new RuntimeException("Retry interrupted", ie);
                }
            }
        }
    }
    
    throw new RuntimeException(
        "Operation failed after " + maxRetries + " attempts",
        lastException
    );
}

// Usage
User user = executeWithRetry(() -> userService.getUser(userId), 3);
\`\`\`

### 4. Global Exception Handler (Spring Boot)

\`\`\`java
@RestControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(ResourceNotFoundException ex) {
        ErrorResponse error = new ErrorResponse(
            ex.getErrorCode().getHttpStatus(),
            ex.getMessage(),
            LocalDateTime.now()
        );
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }
    
    @ExceptionHandler(ValidationException.class)
    public ResponseEntity<ErrorResponse> handleValidation(ValidationException ex) {
        ErrorResponse error = new ErrorResponse(
            400,
            ex.getMessage(),
            LocalDateTime.now()
        );
        return ResponseEntity.badRequest().body(error);
    }
    
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGeneral(Exception ex) {
        ErrorResponse error = new ErrorResponse(
            500,
            "Internal server error",
            LocalDateTime.now()
        );
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
    }
}
\`\`\`

## Best Practices

### ✅ Do's

1. **Catch specific exceptions** - Không catch Exception generic
2. **Use try-with-resources** - Cho auto-closeable resources
3. **Log exceptions properly** - Include context và stack trace
4. **Create custom exceptions** - Cho business logic
5. **Don't swallow exceptions** - Always handle hoặc log
6. **Close resources** - Trong finally hoặc try-with-resources

\`\`\`java
// ✅ Good
try (Connection conn = dataSource.getConnection()) {
    // Use connection
} catch (SQLException e) {
    logger.error("Database error for user: {}", userId, e);
    throw new DataAccessException("Failed to fetch user", e);
}
\`\`\`

### ❌ Don'ts

1. **Đừng catch Exception hoặc Throwable** (quá generic)
2. **Đừng ignore exceptions** (empty catch block)
3. **Đừng log và throw** (duplicate logs)
4. **Đừng use exceptions cho control flow**
5. **Đừng expose sensitive info** trong messages

\`\`\`java
// ❌ Bad
try {
    // Code
} catch (Exception e) {
    // Empty - swallows exception!
}

// ❌ Bad
try {
    // Code
} catch (Exception e) {
    logger.error("Error", e);
    throw e; // Logged twice!
}

// ❌ Bad - exception for control flow
try {
    String value = map.get(key);
    return value;
} catch (NullPointerException e) {
    return defaultValue;
}

// ✅ Good
String value = map.get(key);
return value != null ? value : defaultValue;
\`\`\`

## Kết luận

Exception handling đúng cách giúp:
- Application robust và recoverable
- Debugging dễ dàng
- Better user experience
- Clean, maintainable code

Key takeaways:
- Hiểu checked vs unchecked exceptions
- Use try-with-resources
- Create meaningful custom exceptions
- Follow exception handling patterns
- Log properly

Practice với real scenarios để master exception handling!
        `
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
    blogPosts,
};