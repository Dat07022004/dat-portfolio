const navLinks = [
    { name: "Dự án", link: "#work" },
    { name: "Kinh nghiệm", link: "#experience" },
    { name: "Kỹ năng", link: "#skills" },
    { name: "Đánh giá", link: "#testimonials" },
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
};