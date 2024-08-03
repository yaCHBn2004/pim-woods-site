from typing import Optional
import re

def parse_price_range(price_range: Optional[str]) -> (Optional[float], Optional[float]):
    if price_range:
        match = re.match(r"(\d+)DA-(\d+)DA", price_range)
        if match:
            min_price = float(match.group(1))
            max_price = float(match.group(2))
            return min_price, max_price
    return None, None