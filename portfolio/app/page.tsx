import Portfolio from './portfolio';
import { getPortfolioData } from './albatros';
export default async function Page() {
  const portfolio = await getPortfolioData();
  return <Portfolio portfolio={portfolio} />;
}
