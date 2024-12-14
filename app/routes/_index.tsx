import type { MetaFunction } from "@remix-run/node";
import { Text, View } from "@tamagui/web";

export const meta: MetaFunction = () => {
  return [
    { title: "Tamaigui - Tamagui DevTools" },
    {
      name: "description",
      content:
        "Tamaigui: Dev tools for building and managing Tamagui-powered applications.",
    },
    {
      name: "keywords",
      content:
        "Tamaigui, Tamagui, developer tools, UI generation, React Native, cross-platform development",
    },
    {
      name: "author",
      content: "@mercpls",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ];
};
export default function Index() {
  return (
    <View
      flexDirection="column"
      gap={16}
      backgroundColor="$blue1"
      minHeight="100vh"
    >
      <Text fontFamily="$body">Welcome to the Tamaigui Dashboard</Text>
    </View>
  );
}
