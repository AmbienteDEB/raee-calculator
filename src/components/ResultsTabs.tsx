import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TableExports from "./tables/TableExports";
import TableImports from "./tables/TableImports";
import TableTotal from "./tables/TableTotal";
import { useRaeeCalculator } from "@/hooks/storeRaeeCalculator";

const TabsTriggers = () => {
  const imports = useRaeeCalculator((state) => state.imports);
  const exports = useRaeeCalculator((state) => state.exports);
  return (
    <>
      <TabsTrigger value="imports" disabled={!imports}>
        Importaciones
      </TabsTrigger>
      <TabsTrigger value="export" disabled={!exports}>
        Exportaciones
      </TabsTrigger>
      <TabsTrigger value="net" disabled={!imports || !exports}>
        Total
      </TabsTrigger>
    </>
  );
};

export function ResultsTabs() {
  return (
    <Tabs defaultValue="imports">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTriggers />
      </TabsList>
      <TabsContent value="imports">
        <Card>
          <CardHeader>
            <CardTitle>Importaciones</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 shadow-none">
            <TableImports />
          </CardContent>
          <CardFooter>
            <Button>Exportar a Excel</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="export">
        <Card>
          <CardHeader>
            <CardTitle>Exportaciones</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <TableExports />
          </CardContent>
          <CardFooter>
            <Button>Exportar a excel</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="net">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <TableTotal />
          </CardContent>
          <CardFooter>
            <Button>Exportar a Excel</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
