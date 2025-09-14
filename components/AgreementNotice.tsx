import { Link } from "expo-router";
import { Text } from "react-native";

export default function AgreementNotice() {
  return (
    <Text className="text-center mt-5 px-4">
      By creating an account, you agree to the MetaGlobals{' '}
      <Link
        href="/(auth)/Login"
        className="font-semibold"
        style={{ textDecorationLine: "underline" }}
      >
        terms of service
      </Link>
      {' '}and{' '}
      <Link
        href="/(auth)/Login"
        className="font-semibold"
        style={{ textDecorationLine: "underline" }}
      >
        privacy policy.
      </Link>
    </Text>
  );
}
