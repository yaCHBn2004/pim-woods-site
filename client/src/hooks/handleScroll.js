export const handleScroll = ({ setShowButton }) => {
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / windowHeight) * 100;

    if (scrollPercent > 70) {
        setShowButton(true);
    } else {
        setShowButton(false);
    }
};